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
exports.registroParticipacionController = void 0;
const database_1 = __importDefault(require("../../database"));
class RegistroParticipacionController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const RegistroParticipacion = yield database_1.default.query('SELECT * RegistroParticipacion');
            resp.json(RegistroParticipacion);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into RegistroParticipacion set ?', [req.body]);
        resp.json({ text: 'creating a participante' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_RP } = req.params;
            yield database_1.default.query('UPDATE RegistroParticipacion set? WHERE id_RP=?', [req.body, id_RP]);
            resp.json({ message: 'Registro actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_RP } = req.params;
            const RegistroParticipacion = yield database_1.default.query('SELECT * FROM RegistroParticipacion WHERE id_RP=?', [id_RP]);
            if (RegistroParticipacion.length > 0) {
                return resp.json(RegistroParticipacion[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.registroParticipacionController = new RegistroParticipacionController();
exports.default = exports.registroParticipacionController;
