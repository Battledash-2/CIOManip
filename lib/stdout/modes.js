/**
 * CIOManip
 * 
 * MIT License
 * Copyright (C) 2022 Battledash-2
 */

const modes = {};

let enumV = 0;
const nv = ()=>enumV++;

// Types
modes.PLAIN = nv();
modes.HEX = nv();
modes.BIN = nv();

// Other
modes.CENTER = nv();

module.exports = modes;