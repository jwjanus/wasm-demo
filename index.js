const [node1, node2] = ["p", "p"]
  .map(tag => document.createElement(tag))
  .map(node => document.body.appendChild(node));

loadWasm().then(results => {
  const { add, sub } = results.instance.exports;
  node1.innerHTML = add(41, 1);
  node2.innerHTML = sub(48, 5);
});

function loadWasm() {
  return fetch("calc.wasm")
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}));
}
