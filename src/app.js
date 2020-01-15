import express from 'express';
import bodyParser from 'body-parser';
import mongoose from'mongoose';
import morgan from 'morgan';
import jwt from'jsonwebtoken';

import User from './models/user';
import Item from './models/item';

import config from 'config';
import db from './db/db';
import routes from './routes';
import {GREETING_SUCCSESS, COUPON_SUCCSESS} from './common/messeges-types'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

const port = process.env.PORT || 9000;
app.listen(port);
console.log('Node + Express REST API skeleton server started on port: ' + port);

module.exports = app;

const DB = {};

process.on("message", message =>{
    try{
        switch (message.name){
            case GREETING_SUCCSESS:
                onGreeting(message)
                break;
            case COUPON_SUCCSESS:
                onCoupon(message)
                break;
        }
    }catch(err){

    }
})

function onGreeting(message) {
    if(!DB[message.data.user._id]){
        DB[message.data.user._id] = {};
    }
    const userData = DB[message.data.user._id];
    userData.gotGreeting = true;
    
    if(userData.gotCoupon){
        console.log("account created successfully");
    }
}

function onCoupon(message){
    if(!DB[message.data.user._id]){
        DB[message.data.user._id] = {};
    }
    let userData = DB[message.data.user._id];
    userData.gotCoupon = true;
    
    if(userData.gotGreeting){
        console.log("account created successfully");
    }
}