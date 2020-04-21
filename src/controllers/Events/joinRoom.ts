import socketIO, { Socket } from 'socket.io';

import findRoom from '../../utils/findRoom';
import { Room, RoomUser } from '../../db';

type JoinPayload = {
  username: string;
  room_id: string;
};

const joinRoom = (payload: JoinPayload, socketId: string): [Room, RoomUser] => {
  const room = findRoom(payload.room_id);

  if (room) {
    room.users.push({
      username: payload.username,
      id: socketId,
      points: 0,
      cards: [],
      host: false
    });

    const index = room.users.findIndex(user => user.host === true);
    const user = room.users[index];

    return [room, user];
  } else {
    throw new Error('Room not found');
  }
};

export default (socket: Socket, io: socketIO.Server) => {
  socket.on('joinRoom', (payload: JoinPayload) => {
    try {
      const [room, user] = joinRoom(payload, socket.id);

      socket.join(room.id);

      io.to(room.id).emit('joinRoomReply', {
        room_host: user,
        lobby_users: room.users
      });
    } catch (error) {
      socket.emit('joinRoomReply', {
        error: error.message
      });
    }
  });
};
