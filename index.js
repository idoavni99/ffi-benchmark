const koffi = require("koffi");
const os = require("os");
const getLibraryByPlatform = (libPath) =>
  `${libPath}${os.type() === "Windows_NT" ? ".dll" : ".so"}`;

const lib = koffi.load(getLibraryByPlatform("./lib"));

const sleep = lib.func("sleep", "int", ["int"]);

console.time("MEASURE");
sleep(1);
console.timeEnd("MEASURE");
