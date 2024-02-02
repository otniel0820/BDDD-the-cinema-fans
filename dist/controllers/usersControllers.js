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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUserById = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const utils_1 = require("../domain/utils");
const entities_1 = require("../domain/entities");
const firebase_1 = require("../firebase");
const errorFactory_1 = require("../factories/errorFactory");
const firebase_admin_1 = require("firebase-admin");
//Obtener todos los usuarios
const getUsers = (req, res) => {
    firebase_1.db.collection("users")
        .get()
        .then((snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
            documents.push(Object.assign({ id: doc.id }, doc.data()));
            documents.sort((userA, userB) => {
                return Number(userA.id) - Number(userB.id);
            });
        });
        res.json(documents);
    })
        .catch((error) => {
        res.status(500).json({ error: "Error geting document" });
    });
};
exports.getUsers = getUsers;
// crear usuario
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRef = firebase_1.db.collection("users").doc((0, utils_1.generateKsuid)(entities_1.USER_ID_PREFIX));
        const time = firebase_admin_1.firestore.FieldValue.serverTimestamp();
        const userData = req.body;
        yield userRef.set(Object.assign(Object.assign({}, userData), { createdAt: time }));
        console.log("Document successfully created");
        res.status(200).json({ message: "Document successfully created" });
    }
    catch (error) {
        (0, errorFactory_1.errorFactory)(res, 404);
    }
});
exports.createUser = createUser;
// Actualizar un usuario
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const userRef = firebase_1.db.collection("users").doc(id);
        const time = firebase_admin_1.firestore.FieldValue.serverTimestamp();
        const userData = req.body;
        yield userRef.update(Object.assign(Object.assign({}, userData), { updatedAt: time }));
        console.log("Document successfully created");
        res.status(200).json({ message: "Document successfully updated" });
    }
    catch (error) {
        console.error("Error creating document:", error);
        res.status(500).json({ error: `Error updating user ${error}` });
    }
});
exports.updateUser = updateUser;
//Obtener usuario por id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userRef = firebase_1.db.collection("users").doc(id);
    try {
        const documentSnapshot = yield userRef.get();
        if (documentSnapshot.exists) {
            const userById = Object.assign({ id: documentSnapshot.id }, documentSnapshot.data());
            res.status(200).json(userById);
        }
        else {
            res.status(404).send((0, errorFactory_1.errorFactory)("Document not found", 404));
        }
    }
    catch (error) {
        console.error("Error getting user by ID:", error);
        res.status(500).send((0, errorFactory_1.errorFactory)("Internal server error", 500));
    }
});
exports.getUserById = getUserById;
//Eliminar usuario
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        yield firebase_1.db.collection("users").doc(id).delete();
        res.status(200).json({ message: "Deleted user" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: `Error deleting user ${error}` });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usersControllers.js.map