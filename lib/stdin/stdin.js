/**
 * CIOManip
 * 
 * MIT License
 * Copyright (C) 2022 Battledash-2
 */

const sync = require('./prompt');
const std = {};

std.read  = (prompt='Prompt: ', options={ sigint: true }) => sync(prompt, options);

module.exports = std;