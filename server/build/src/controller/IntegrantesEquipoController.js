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
exports.integrantesEquipoController = void 0;
const database_1 = __importDefault(require("../../database"));
class IntegrantesEquipoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const IntegrantesEquipo = yield database_1.default.query('SELECT * IntegrantesEquipo');
            resp.json(IntegrantesEquipo);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into IntegrantesEquipo set ?', [req.body]);
        resp.json({ text: 'creating a integrante' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_In } = req.params;
            yield database_1.default.query('UPDATE IntegrantesEquipo set? WHERE id_In=?', [req.body, id_In]);
            resp.json({ message: 'Integrante Actualizado' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_In } = req.params;
            const IntegrantesEquipo = yield database_1.default.query('SELECT * FROM IntegrantesEquipo WHERE id_In=?', [id_In]);
            if (IntegrantesEquipo.length > 0) {
                return resp.json(IntegrantesEquipo[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.integrantesEquipoController = new IntegrantesEquipoController();
exports.default = exports.integrantesEquipoController;
