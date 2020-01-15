import { NEW_USER_CREATED, COUPON_SUCCSESS } from "../common/messeges-types";

console.log("starting coupon service");

process.on("message", message => {
  try {
    switch (message.name) {
      case NEW_USER_CREATED:
        onCreateNewUser(message.data);
        process.send({name: COUPON_SUCCSESS, data:{user: message.data.newUser}});
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
  console.log("coupon service: sending coupon");
}
