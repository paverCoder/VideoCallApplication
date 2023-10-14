const users = {};
const chats = {};
const socketToRoom = new Set();
const shortid = require("shortid");

// TODO: New Meeting 
exports.newMeeting = (socket) => {

}


// TODO: Join Meet by ID
exports.joinMeetbyId = (socket, roomID, user) => {

  
}

// TODO: Leave Meeting 
exports.leaveMeeting = (socket, roomID, user) => {

}


// TODO: send Message to user
exports.sendMessage = (socket, text, user, roomID) => {
    if (roomID && socketToRoom.has(roomID)) {
    chats[roomID].push({
      data: text,
      name: user.fname
    });

    const message={data:text,user}
    socket.emit("receiveMessage", { message, chat: chats[roomID] });
    socket.broadcast
      .to(roomID)
      .emit("receiveMessage", { message, chat: chats[roomID] });
  }

}
