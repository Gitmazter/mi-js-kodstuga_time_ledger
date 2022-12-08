export default class Time {
    constructor(data, index = 0, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = hash;
    }

    async calculateHash() {
        // Calculate Black Hasch
    }

    async mineBlock () {
        // Majn a bl[]ck
    }

    

}