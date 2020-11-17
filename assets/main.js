/**
 * for instance, i wanted to use buffer npm packge in the browser instead
 * of the nodejs runtime
 */
const Buffer = require('buffer').Buffer

// append it to the window object
global.window.Buffer = Buffer