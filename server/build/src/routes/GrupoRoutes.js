"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GrupoController_1 = require("./../controller/GrupoController");
const express_1 = require("express");
class GrupoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', GrupoController_1.grupoController.list);
        this.router.post('/', GrupoController_1.grupoController.create);
        this.router.put('/:Id_Grupo', GrupoController_1.grupoController.update);
        this.router.get('/:Id_Grupo', GrupoController_1.grupoController.getOne);
    }
}
const grupoRoutes = new GrupoRoutes();
exports.default = grupoRoutes.router;
