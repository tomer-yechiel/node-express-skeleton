const { fork } = require("child_process");

const backend = fork("./src/app.js");
const messagingService = fork("./src/messaging-service/index.js");
const couponService = fork("./src/coupon-service/index.js");

const services = [backend, messagingService, couponService];

services.forEach(service => service.on("message", broadcast))

function broadcast(message) {
    services.forEach(service => service.send(message))
}