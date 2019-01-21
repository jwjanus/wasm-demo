loadWasm("logger", { imported_func: param => console.log(param) }).then(results => {
  const { exported_func } = results.instance.exports;
  exported_func();
});
