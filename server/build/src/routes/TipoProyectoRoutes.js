"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoProyectoController_1 = require("./../controller/TipoProyectoController");
const express_1 = require("express");
class TipoProyectoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', TipoProyectoController_1.tipoProyectoController.list);
        this.router.post('/', TipoProyectoController_1.tipoProyectoController.create);
        this.router.put('/:id_TP', TipoProyectoController_1.tipoProyectoController.update);
        this.router.get('/:id_TP', TipoProyectoController_1.tipoProyectoController.getOne);
    }
}
const tipoProyectoRoutes = new TipoProyectoRoutes();
exports.default = tipoProyectoRoutes.router;
