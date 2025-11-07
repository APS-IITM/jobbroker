'use strict';

const { exec } = require('child_process');
const path = require('path');

console.log('Hello world');

// Build absolute path to index.html
const filePath = path.join(__dirname, 'index.html');

// Open index.html depending on OS
let command = '';

if (process.platform === 'win32') {
    command = `start "" "${filePath}"`;
} else if (process.platform === 'darwin') {
    command = `open "${filePath}"`;
} else {
    command = `xdg-open "${filePath}"`;
}

exec(command, (err) => {
    if (err) {
        console.error('Failed to open index.html:', err);
    }
});
