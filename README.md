# CIOManip
### A speedy and lightweight io manipulation tool

## ❓ Examples 🧪
### Importing/Requiring:
```js
const std = require('ciomanip');
```

### Reading from stdin (sync):
```js
// ... require
const input = std.in.read('What\'s your name? ');
console.log('His name is ' + input + '!');
```

### Set state width
```js
std.setwidth(16);
```

### Set state fill
#### Setting the fill will check if the width is more than 0,<br/>if it is, it will use the width to fill in the text (1 -> 001)
```js
std.setwidth(3);
std.setfill('0');
std.write('1'); // 001
```

### Writing a list
#### Lists use the width and align each row to fit in the list
```js
std.setwidth(16);
std.fillWith([
	['hello', 'world', 5],
	['world', 'hello'],
	[5, 'world', 'hello'],
]);
```

### Writing anything
```js
std.write('hello');
```
#### Write with a newline
```js
std.writes('hello');
```

### Writing a newline
```js
std.line(); // console.log(); | process.stdout.write('\n');
```

### Alignment
#### Left:
```js
std.alignLeft('text'); // has no special functionality
```
#### Right:
```js
std.setwidth(20);
std.alignRight('Hello world');
```
#### Left-to-Right Table:
##### Arguments: `Array<any> left`, `Array<any> right`, `Number<> padding`
```js
std.setwidth(50);
std.leftRightTable(
	['Value1', 'Value2'],
	['I\'m on the right!'],
);
```
#### Normal Table:
```js
std.setwidth(51);
std.writeTable([
	['hello, world!', 'hey'],
	['hello, world!', 'hey again']
]);
```
#### Formatted Table:
```js
std.setwidth(51);
std.formatTable([
	['hello, world!', 'hey'],
	['hello, world!', 'hey again']
]);
```

### Changing display mode:
#### Hex Mode (displays 0x&lt;hex> rather than &lt;number>)
```js
std.hex();
std.writes(0xA); // 0xA
std.writes(10); // 0xA
```
#### Binary Mode
```js
std.bin();
std.writes(0xA); // 1010
std.writes(10); // 1010
```
#### Plain Mode
```js
std.plain();
std.write(0xA); // 10
std.write(10); // 10
```
### Reset all settings:
```js
std.reset();
```

### Using different modes without a state change
```js
std.dir.hex(0xA); // 0xA
std.dir.hex(10); // 0xA

std.dir.bin(0xA); // 1010
std.dir.bin(10); // 1010

std.dir.plain(10); // 10
std.dir.plain(0xA); // 10
```

## Full example:
```js
// Title
std.setwidth(16);
std.center('-');
std.write('Notes');

// Table
std.fillWith([
	['hello', 'world', 5],
	['world', 'hello'],
	[5, 'world', 'hello'],
]);

// Align
std.alignRight('Hello');
std.line();

// console.log(std.in.read('Hello, '));

std.reset();
std.hex();

std.writes(0x3A);
```