"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./src/routes/indexRoutes"));
const TipoProyectoRoutes_1 = __importDefault(require("./src/routes/TipoProyectoRoutes"));
const CategoriaParticiapcionRoutes_1 = __importDefault(require("./src/routes/CategoriaParticiapcionRoutes"));
const RegistroParticipacionRoutes_1 = __importDefault(require("./src/routes/RegistroParticipacionRoutes"));
const GrupoRoutes_1 = __importDefault(require("./src/routes/GrupoRoutes"));
const CarreraRoutes_1 = __importDefault(require("./src/routes/CarreraRoutes"));
const IntegrantesEquipoRoutes_1 = __importDefault(require("./src/routes/IntegrantesEquipoRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
console.log('WORKS!!');
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/tipop', TipoProyectoRoutes_1.default); //ruta propia
        this.app.use('/api/catego', CategoriaParticiapcionRoutes_1.default);
        this.app.use('/api/registro', RegistroParticipacionRoutes_1.default);
        this.app.use('/api/carrera', CarreraRoutes_1.default);
        this.app.use('/api/grupo', GrupoRoutes_1.default);
        this.app.use('/api/integrantes', IntegrantesEquipoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server(); // ejecuta la clese y devuelve un objeto
server.start();
