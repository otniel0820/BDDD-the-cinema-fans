"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
// import routeProtected from "./routes/protectedRoute";
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json());
app.use('/api', userRoute_1.default);
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    return res.send('App user Funcionando');
});
app.listen(port, () => {
    console.log(`USERS_API: Listening on port ${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map