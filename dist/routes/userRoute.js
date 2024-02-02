"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
const userSchemaValidate_1 = require("../middleware/userSchemaValidate");
const modelSchemaFactory_1 = __importDefault(require("../factories/modelSchemaFactory"));
const routeUser = (0, express_1.Router)();
routeUser.get('/user', usersControllers_1.getUsers);
routeUser.get('/user/:id', usersControllers_1.getUserById);
routeUser.post('/user', (0, modelSchemaFactory_1.default)([userSchemaValidate_1.userSchemaValidateMW]), usersControllers_1.createUser);
routeUser.patch('/user/:id', usersControllers_1.updateUser);
routeUser.delete('/user/:id', usersControllers_1.deleteUser);
exports.default = routeUser;
//# sourceMappingURL=userRoute.js.map