function appendDOMNode(type) {
    const elem = document.createElement(type);
    return document.body.appendChild(elem);
}


function loadWasm(moduleName, importObject = {}) {
    return fetch(`${moduleName}.wasm`)
        .then(response => response.arrayBuffer())
        .then(bytes => {
            return WebAssembly.instantiate(bytes, importObject);
        });
}