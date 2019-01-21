const [node1] = ["p"]
  .map(tag => document.createElement(tag))
  .map(node => document.body.appendChild(node));

function fromJS(number) {
  return number;
}

function loadWasm(moduleName) {
  return fetch(`${moduleName}.wasm`)
    .then(response => response.arrayBuffer())
    .then(bytes => {
      return WebAssembly.instantiate(bytes, {
        imports: { imported_func: fromJS }
      });
    });
}

loadWasm("logger").then(results => {
  const { exported_func } = results.instance.exports;
  node1.innerHTML = exported_func();
});
