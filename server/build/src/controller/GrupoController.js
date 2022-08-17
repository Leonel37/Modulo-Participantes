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
exports.grupoController = void 0;
const database_1 = __importDefault(require("../../database"));
class GrupoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const Grupo = yield database_1.default.query('SELECT * Grupo');
            resp.json(Grupo);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into Grupo set ?', [req.body]);
        resp.json({ text: 'creating a grupo' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_Grupo } = req.params;
            yield database_1.default.query('UPDATE Grupo set? WHERE Id_Grupo=?', [req.body, Id_Grupo]);
            resp.json({ message: 'Grupo actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_Grupo } = req.params;
            const Grupo = yield database_1.default.query('SELECT * FROM Grupo WHERE Id_Grupo=?', [Id_Grupo]);
            if (Grupo.length > 0) {
                return resp.json(Grupo[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.grupoController = new GrupoController();
exports.default = exports.grupoController;
