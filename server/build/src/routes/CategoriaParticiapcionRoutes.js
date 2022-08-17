"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriaParticipacionController_1 = require("../controller/CategoriaParticipacionController");
const express_1 = require("express");
class CategoriaParticipacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CategoriaParticipacionController_1.categoriaParticipacionController.list);
        this.router.post('/', CategoriaParticipacionController_1.categoriaParticipacionController.create);
        this.router.put('/:id_CP', CategoriaParticipacionController_1.categoriaParticipacionController.update);
        this.router.get('/:id_CP', CategoriaParticipacionController_1.categoriaParticipacionController.getOne);
    }
}
const categoriaParticipacionRoutes = new CategoriaParticipacionRoutes();
exports.default = categoriaParticipacionRoutes.router;
