const std = require('./lib/main');

// Title
std.setwidth(16);
std.center('-');
std.write('Notes');

// Table
std.fillWith([
	['hello', 'world', 5],
	['okays',  'hey',  5],
	['world',    'hello'],
	[5, 'world', 'hello'],
]);

// Align
std.alignRight('Hello');
std.line();

// console.log(std.in.read('Hello, '));

std.reset();
std.hex();

std.writes(0x3A);

std.reset();

std.setwidth(18);
std.center('-');
std.write('Test!');

// Custom table?
std.setwidth(2);
std.setfill('0');
std.write(1);
std.raw = ' ';
std.write(5);
std.raw = ' '.repeat(14-'CONST'.length);
std.raw = 'CONST';
std.line();

// Left - right table
std.setwidth(33);
std.center('-');
std.write('Left Right!');

std.leftRightTable(
	[ std.dir.hex(1), std.dir.hex(2) ],
	[ 'CONST', 0, '("Hello!")' ],
);

std.setwidth(50);
std.leftRightTable(
	['Value1', 'Value2'],
	['I\'m on the right!'],
);

std.bin();
std.writes(0xA); // 1010
std.writes(10); // 1010

// Tables
std.reset();

std.setwidth(53);
std.center('-');
std.write('Tables');

std.writeTable([
	['something', 'something else', 'idk'],
	['heyzs', 'tables', 'ftw'],
	['hey', 'tables', 'ftw'],
	['something', 'something else', 'idk'],
]);