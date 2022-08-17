"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IntegrantesEquipoController_1 = __importDefault(require("../controller/IntegrantesEquipoController"));
const express_1 = require("express");
class IntegrantesEquipoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', IntegrantesEquipoController_1.default.list);
        this.router.post('/', IntegrantesEquipoController_1.default.create);
        this.router.put('/:id_In', IntegrantesEquipoController_1.default.update);
        this.router.get('/:id_In', IntegrantesEquipoController_1.default.getOne);
    }
}
const integrantesEquipoRoutes = new IntegrantesEquipoRoutes();
exports.default = integrantesEquipoRoutes.router;
