"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.USER_ID_PREFIX = void 0;
const zod_1 = __importDefault(require("zod"));
exports.USER_ID_PREFIX = "user"; // este es el prefijo que llevara el id de cada libro
exports.userSchema = zod_1.default.object({
    contactDate: zod_1.default.string(),
    name: zod_1.default.string(),
    divice: zod_1.default.string(),
    address: zod_1.default.string(),
    city: zod_1.default.string(),
    status: zod_1.default.string(),
    followUp: zod_1.default.string(),
    followUpDate: zod_1.default.string(),
    comments: zod_1.default.string(),
    isClient: zod_1.default.string(),
    source: zod_1.default.string(),
});
//# sourceMappingURL=usersEntity.js.map