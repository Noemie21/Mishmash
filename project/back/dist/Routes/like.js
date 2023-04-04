"use strict";
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
const express_1 = __importDefault(require("express"));
const Like_1 = require("../Models/Like");
let router = express_1.default.Router();
router.put('/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let like = yield Like_1.Like.findOne();
    like.number = req.body.number + 1;
    yield like.save();
    res.json({ status: 200, data: { like } });
}));
router.get('/likes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let like = yield Like_1.Like.find();
    res.json({ status: 200, data: { like } });
}));
exports.default = router;
//# sourceMappingURL=like.js.map