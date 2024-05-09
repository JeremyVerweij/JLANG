var JLANG = {};
JLIB.extensions.JLANG = JLANG;

var JLANG_SRC = [
    {src: "parseLang", requirements: [], enabled: () => true},
];

JLIB_LOADER.LOAD_EXTENSION_SRC_LIST(JLANG_SRC, "JLANG");