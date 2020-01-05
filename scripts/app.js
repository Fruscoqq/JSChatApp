// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const rooms = document.querySelector('.chat-rooms');


// // check localStorage for a name
let username = '';
if (localStorage.username) {
  username = localStorage.username;
} else {
  username = 'annonymous'
}

// update the chat room
rooms.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats((data) => {
      chatUI.render(data);
    });

  }
})

// class instances
const chatroom = new Chatroom('general', username);
const chatUI = new ChatUI(chatList);

// add new chat
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => {
      newChatForm.reset()

    })
    .catch((err) => console.log(err))
});

// update the name

newNameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateUsername(newName);
  newNameForm.reset();
})

// get chats and render
chatroom.getChats((data) => {
  chatUI.render(data);
  // animating li
})
