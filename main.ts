import { Server } from "./server/Server"
import { usersRouter } from "./users/UsersRouter"

const server = new Server()

server.bootstrap([usersRouter]).then(server => {
    console.log('Server is listening on: ', server.application.address())
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1)
})