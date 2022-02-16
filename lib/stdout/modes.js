const modes = {};

let enumV = 0;
const nv = ()=>enumV++;

modes.PLAIN = nv();
modes.HEX = nv();
modes.CENTER = nv();

module.exports = modes;