"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegistroParticipacionController_1 = __importDefault(require("../controller/RegistroParticipacionController"));
const express_1 = require("express");
class RegistroParticipacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', RegistroParticipacionController_1.default.list);
        this.router.post('/', RegistroParticipacionController_1.default.create);
        this.router.put('/:id_RP', RegistroParticipacionController_1.default.update);
        this.router.get('/:id_RP', RegistroParticipacionController_1.default.getOne);
    }
}
const registroParticipacionRoutes = new RegistroParticipacionRoutes();
exports.default = registroParticipacionRoutes.router;
