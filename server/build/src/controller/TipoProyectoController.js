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
exports.tipoProyectoController = void 0;
const database_1 = __importDefault(require("../../database"));
class TipoProyectoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const TipoProyecto = yield database_1.default.query('SELECT * TipoProyecto');
            resp.json(TipoProyecto);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into TipoProyecto set ?', [req.body]);
        resp.json({ text: 'creating a TipoProyecto' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_TP } = req.params;
            yield database_1.default.query('UPDATE TipoProyecto set? WHERE id_TP=?', [req.body, id_TP]);
            resp.json({ message: 'Tipo actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_TP } = req.params;
            const TipoProyecto = yield database_1.default.query('SELECT * FROM TipoProyecto WHERE id_TP=?', [id_TP]);
            if (TipoProyecto.length > 0) {
                return resp.json(TipoProyecto[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.tipoProyectoController = new TipoProyectoController();
exports.default = exports.tipoProyectoController;
