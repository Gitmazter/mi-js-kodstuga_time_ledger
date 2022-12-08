export default class Time {
    constructor(data, index = 0, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    async calculateHash(input) {
        // Calculate Black Hasch
        let pWordInt8 = new TextEncoder().encode("salt1234salt"+JSON.stringify(this.data) +this.index+this.timestamp+this.prevHash+this.nonce);
        let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        console.log("HashHex", HashHex);
        return HashHex;
    }

    async mineBlock () {
        // Majn a bl[]ck
    }



}