"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HouseDirector_1 = __importDefault(require("../HouseDirector"));
var director = new HouseDirector_1.default();
console.log(JSON.stringify(director.buildCottage(), null, 2));
//# sourceMappingURL=index.js.map