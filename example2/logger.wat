(module
  (func $i (import "imports" "imported_func") (param i32) (result i32))
  (func (export "exported_func")
    i32.const 5
    call $i
    (result i32)))