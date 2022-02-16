/**
 * CIOManip
 * 
 * MIT License
 * Copyright (C) 2022 Battledash-2
 */

const modes = require('./modes');

const std = {};
const base = process.stdout;

let raw = '';
Object.defineProperty(std, 'data', {
	get() { return raw; },
	set(value) {
		value = parse(value);
		raw += value;
		base.write(value);
		return true;
	}
});

const state = {
	width: 0,
	fill: '',
	mode: modes.PLAIN,
};

std.reset    = () => { state.fill = ''; state.mode = modes.PLAIN; state.width = 0; return ''; };

std.hex      = () => { state.mode = modes.HEX; return ''; };
std.plain    = () => { state.mode = modes.PLAIN; return ''; };

std.setwidth = (width=0) => { state.width = width > 0 ? width : 0; return ''; };
std.setfill  = (string='') => { state.fill = string; return ''; };
std.fill     = () => { base.write(state.fill.toString().repeat(state.width)); return ''; };

std.center   = (surround='-') => { state.mode = modes.CENTER; state.fill = surround; return ''; }

const parse = (string='', cWidth=true) => {
	let result = string;
	cWidth = cWidth ?? true;

	switch (state.mode) {
		case modes.HEX:
			if (!isNaN(parseInt(result))) result = '0x' + (parseInt(result).toString(16)).toUpperCase();
			break;
		case modes.CENTER:
			var l = state.fill.repeat(((state.width / 2) - (result.length-2)));
			result = l + ' ' + result + ' ' + l + '\n';
			state.mode = modes.PLAIN;
			state.fill = '';
			cWidth = false;
			break;
	}

	if (state.width > 0 && state.fill.length > 0 && cWidth) result = append(result.toString(), state.fill.toString() ?? ' ', state.width);

	return typeof result === 'undefined' ? '' : result.toString();
}
const append = (main='', second='', width=state.width) => second.repeat(width - main.length) + main;

std.write = (message) => {
	const msg = parse(message);
	raw += msg;
	base.write(msg);
	return '';
}
std.writes = (message) => { std.write(message); base.write('\n'); return ''; };
std.fillWith = (table=[[],[],[]]) => {
	for (let row of table) {
		row = row.map(c=>parse(c, false));
		const spaces = ' '.repeat(((state.width-row.flat().join('').length)/(row.length-1))+1);
		for (let c = 0; c<row.length; c++) {
			let column = row[c];
			base.write(column);
			if (c < row.length-1) base.write(spaces);
		}
		base.write('\n');
	}
}
std.alignLeft = std.write;
std.alignRight = (string='') => {
	base.write(' '.repeat(state.width - (string.length-1)) + parse(string));
	return '';
}

std.line  = () => { base.write('\n'); return ''; }
std.log   = (message) => base.write(message + '\n');

module.exports = std;