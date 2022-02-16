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
std.out.setwidth(16);
```

### Set state fill
#### Setting the fill will check if the width is more than 0,<br/>if it is, it will use the width to fill in the text (1 -> 001)
```js
std.out.setwidth(3);
std.out.setfill('0');
std.out.write('1'); // 001
```

### Writing a list
#### Lists use the width and align each row to fit in the list
```js
std.out.setwidth(16);
std.out.fillWith([
	['hello', 'world', 5],
	['world', 'hello'],
	[5, 'world', 'hello'],
]);
```

### Writing anything
```js
std.out.write('hello');
```

### Writing a newline
```js
std.out.line(); // console.log(); | process.stdout.write('\n');
```

### Alignment
#### Left:
```js
std.out.alignLeft('text'); // has no special functionality
```
#### Right:
```js
std.out.setwidth(20);
std.out.alignRight('Hello world');
```

### Changing display mode:
#### Hex Mode (displays 0x&lt;hex> rather than &lt;number>)
```js
std.out.hex();
std.out.write(0xA); // 0xA
std.out.write(10); // 0xA
```
#### Resetting
```js
std.out.plain();
std.out.write(0xA); // 10
std.out.write(10); // 10
```

## Full example:
```js
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
```