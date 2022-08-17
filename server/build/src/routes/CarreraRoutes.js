"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarreraController_1 = require("./../controller/CarreraController");
const express_1 = require("express");
class CareraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CarreraController_1.carreraController.list);
        this.router.post('/', CarreraController_1.carreraController.create);
        this.router.put('/:Id_Carrera', CarreraController_1.carreraController.update);
        this.router.get('/:Id_Carrera', CarreraController_1.carreraController.getOne);
    }
}
const carreraRoutes = new CareraRoutes();
exports.default = carreraRoutes.router;
