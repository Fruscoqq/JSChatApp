class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
  async addChat(message) {
    // format chat object
    const now = new Date();
    const chat =
    {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    const response = await this.chats.add(chat);
  }
  getChats(callback) {
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            // update the ui
            callback(change.doc.data())
          }
        })
      })
  }
  updateUsername(newName) {
    this.username = newName
    localStorage.setItem('username', newName)
  }
  updateRoom(newRoom) {
    this.room = newRoom;
    console.log('room updated')
    // if (this.unsub) {
    //   this.unsub();
    // }
  }
}



