const [node1, node2] = ["p", "p"]
  .map(tag => document.createElement(tag))
  .map(node => document.body.appendChild(node));

loadWasm("calc").then(results => {
  const { add, sub } = results.instance.exports;
  node1.innerHTML = add(41, 1);
  node2.innerHTML = sub(48, 5);
});

function loadWasm(moduleName) {
  return fetch(`${moduleName}.wasm`)
    .then(response => response.arrayBuffer())
    .then(bytes => {
      console.log(moduleName, bytes);
      return WebAssembly.instantiate(bytes, {});
    });
}
