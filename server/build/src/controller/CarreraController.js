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
exports.carreraController = void 0;
const database_1 = __importDefault(require("../../database"));
class CarreraController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const Carrera = yield database_1.default.query('SELECT * Carrera');
            resp.json(Carrera);
        });
    }
    create(req, resp) {
        database_1.default.query('insert into Carrera set ?', [req.body]);
        resp.json({ text: 'creating a categoria' });
        console.log(req.body);
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_Carrera } = req.params;
            yield database_1.default.query('UPDATE Carrera set? WHERE Id_Carrera=?', [req.body, Id_Carrera]);
            resp.json({ message: 'Carrera actualizada' });
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Id_Carrera } = req.params;
            const Carrera = yield database_1.default.query('SELECT * FROM Carrera WHERE Id_Carrera=?', [Id_Carrera]);
            if (Carrera.length > 0) {
                return resp.json(Carrera[0]);
            }
            resp.status(404).json({ text: 'No exite' });
        });
    }
}
exports.carreraController = new CarreraController();
exports.default = exports.carreraController;
