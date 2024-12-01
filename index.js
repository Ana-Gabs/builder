const ConstructorComputadora = require('./ensamblador/ConstructorComputadora');
const DirectorComputadora = require('./ensamblador/DirectorComputadora');

const builder = new ConstructorComputadora();

const gamingPC = DirectorComputadora.construirGamingPC(builder);
console.log(gamingPC.toString());

const oficinaPC = DirectorComputadora.construirOficinaPC(builder);
console.log(oficinaPC.toString());

const basicaPC = DirectorComputadora.construirBasicaPC(builder);
console.log(basicaPC.toString());
