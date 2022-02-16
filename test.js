const std = require('./lib/main');

// Title
std.out.setwidth(16);
std.out.center('-');
std.out.write('Notes');

// Table
std.out.fillWith([
	['hello', 'world', 5],
	['world', 'hello'],
	[5, 'world', 'hello'],
]);

// Align
std.out.alignRight('Hello');
std.out.line();

// console.log(std.in.read('Hello, '));