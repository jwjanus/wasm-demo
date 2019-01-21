const node = appendDOMNode("p");

const bytes = `
    00 61 73 6d 01 00 00 00 01 07 01 60 02 7f 7f 01 
    7f 03 03 02 00 00 07 0d 02 03 61 64 64 00 00 03 
    73 75 62 00 01 0a 11 02 07 00 20 00 20 01 6a 0b 
    07 00 20 00 20 01 6b 0b`
  .split(/[\s\r\n]+/g)
  .filter(v => Boolean(v))
  .map(v => parseInt(v, 16));

const buff = new Uint8Array(bytes);

WebAssembly.compile(buff).then(mod => {
  const {
    exports: { add }
  } = new WebAssembly.Instance(mod);
  node.innerHTML = add(41, 1);
});
