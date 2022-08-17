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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaParticipacionController = void 0;
const database_1 = __importDefault(require("../../database"));
class CategoriaParticipacionController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const CategoriaParticipacion = yield database_1.default.query('SELECT * CategoriaParticipacion');
            resp.json(CategoriaParticipacion);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into CategoriaParticipacion set ?', [req.body]);
        resp.json({ text: 'creating a categoria' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_CP } = req.params;
            yield database_1.default.query('UPDATE CategoriaParticipacion set? WHERE id_CP=?', [req.body, id_CP]);
            resp.json({ message: 'Categoria Participacion actualizada' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_CP } = req.params;
            const CategoriaParticipacion = yield database_1.default.query('SELECT * FROM CategoriaParticipacion WHERE id_CP=?', [id_CP]);
            if (CategoriaParticipacion.length > 0) {
                return resp.json(CategoriaParticipacion[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.categoriaParticipacionController = new CategoriaParticipacionController();
exports.default = exports.categoriaParticipacionController;
