"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const User_1 = require("./Models/User");
const Like_1 = require("./Models/Like");
const user_1 = __importDefault(require("./Routes/user"));
const like_1 = __importDefault(require("./Routes/like"));
const typeorm_1 = require("typeorm");
const bodyParser = __importStar(require("body-parser"));
const sha512 = __importStar(require("js-sha512"));
const jwt = __importStar(require("jsonwebtoken"));
var jwtExpress = require('express-jwt');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.use(jwtExpress({ secret: 'ThisIsMySecretSentence1234', algorithms: ['HS256'] }).unless({ path: ['/auth'] }));
app.use(user_1.default);
app.use(like_1.default);
(0, typeorm_1.createConnection)({
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "mishmash_db",
    entities: [
        User_1.User,
        Like_1.Like,
        // __dirname + "/Models/*.ts"
    ],
    synchronize: true,
    logging: false
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ status: 200, data: "hello" });
}));
app.post('/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield User_1.User.findOne({ where: {
            username: req.body.username,
            password: sha512.sha512(req.body.password)
        } });
    console.log(user);
    let token = jwt.sign({ id: user.id }, 'ThisIsMySecretSentence1234');
    res.json({ status: 200, data: token });
}));
app.listen(7777);
//tsc
//nodemon src/app.ts
//# sourceMappingURL=app.js.map