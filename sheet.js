import Time from "./time.js";

export default class Sheet {
    constructor() {
        this.timeSheet = [this.createGenesisBlock()];
        this.difficulty = 1;
    }

    createGenesisBlock() {
        return new Time({"user" : "Genesis", "work" : 0});
    }

    getLatestTime() {
        // FETCH PREV TIME
        return this.timeSheet[this.timeSheet.length -1];
    }

    async addTime(newTime) {
        // FETCH AND PUCH NEW TIMES
        // ALSO SAVE PREV HASH
        newTime.prevHash = this.getLatestTime().hash;
        // MAJN IT
        // MORROCCAN HASCH IT!
        newTime.hash = await newTime.calculateHash();
        // OOOh PUSH IT
        this.timeSheet.push(newTime);
    }

    isChainValie() {
        // VALIDATE CHAIN
    }
}