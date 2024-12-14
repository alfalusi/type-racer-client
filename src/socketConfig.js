import io from 'socket.io-client';

const socket =  io('http://192.168.100.121:3001');

export default socket;