const [node1, node2] = ["p", "p"].map(appendDOMNode);

loadWasm("calc").then(results => {
  const { add, sub } = results.instance.exports;
  node1.innerHTML = add(41, 1);
  node2.innerHTML = sub(48, 5);
});