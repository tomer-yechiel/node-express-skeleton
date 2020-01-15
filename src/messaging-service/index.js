import { NEW_USER_CREATED, GREETING_SUCCSESS } from "../common/messeges-types";

console.log("starting messaging");

process.on("message", message => {
  try {
    switch (message.name) {
      case NEW_USER_CREATED:
        onCreateNewUser(message.data);
        process.send({name: GREETING_SUCCSESS, data:{user: message.data.newUser}});
        break;
      default:
      //do nothing
    }
  }catch(err) {
      console.log(err)
      //log
  }
});

function onCreateNewUser(message) {
  console.log("messeging service: sending greeting message");
}
