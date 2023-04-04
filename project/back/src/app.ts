import "reflect-metadata";

import express from 'express';
import cors from 'cors';
import { User } from "./Models/User";
import { Like } from "./Models/Like"
import UsersRouter from './Routes/user';
import LikesRouter from './Routes/like';
import { createConnection, getConnection } from "typeorm";
import * as bodyParser from 'body-parser'
import * as sha512 from 'js-sha512';
import * as jwt from 'jsonwebtoken';

var jwtExpress = require('express-jwt');
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(jwtExpress({ secret: 'ThisIsMySecretSentence1234', algorithms: ['HS256']}).unless({path: ['/likes']}));
app.use(UsersRouter);
app.use(LikesRouter);

createConnection({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "mishmash_db",
    entities: [
        User,
        Like,
        // __dirname + "/Models/*.ts"
    ],
    synchronize: true,
    logging: false
})

app.get('/', async (req, res) => {
    res.json({status: 200, data: "hello"})
});

app.post('/auth', async (req, res) => {
    let user = await User.findOne({where: {  
        username: req.body.username,
        password: sha512.sha512(req.body.password)
    }})
    console.log(user)
    let token = jwt.sign({ id: user.id }, 'ThisIsMySecretSentence1234');
  
    res.json({status: 200, data: token})
  
})

app.listen(7777);

//tsc
//nodemon src/app.ts