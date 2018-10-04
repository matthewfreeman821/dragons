const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate() {
        return new Date();
    }
}

class Dragon {
    constructor({birthdate, nickname} = {}) {//The ={} after the props declaration is so the default values can be used when not specified
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}

module.exports = Dragon;