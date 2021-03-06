/**
 * CIOManip
 * 
 * MIT License
 * Copyright (C) 2022 Battledash-2
 */

const stdin = require('./stdin/stdin.js');
const stdout = require('./stdout/stdout.js');

const exp = { ...stdin, ...stdout };
Object.defineProperties(exp, stdout.__assignments);
delete stdout.__assignments;

module.exports = exp;