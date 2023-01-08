const koffi = require("koffi");

const lib = koffi.load("./lib.dll");

const sleep = lib.func("sleep", "int", ["int"]);

console.time("MEASURE");
sleep(0);
console.timeEnd("MEASURE");
i++;
