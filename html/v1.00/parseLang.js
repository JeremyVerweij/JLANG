JLANG.langMap = class{
    constructor(langName, parsedLang){
        this.langName = langName;
        this.lang = new Map(Object.entries(parsedLang));
    }

    get(key){
        return (this.lang.has(key) ? this.lang.get(key) : "");
    }
}

JLANG.langObject = class{
    constructor(name, defaultLang = "EN_US"){
        this.name = name;
        this.defaultLang = defaultLang.toUpperCase();

        this.currentLang = null;
        this.allLang = new Map();
    }

    addNewLang(langName, parseLang){
        this.allLang.set(langName.toUpperCase(), new JLANG.langMap(langName.toUpperCase(), parseLang));

        if(langName.toUpperCase == this.defaultLang)
            this.currentLang = this.allLang.get(langName.toUpperCase());
    }

    get(key){
        return this.currentLang.get(key);
    }

    setLang(langName){
        this.defaultLang = langName.toUpperCase();
        this.currentLang = this.allLang.get(langName.toUpperCase());
    }
}

window.dispatchEvent(JLIB.common.scriptLoaded)
