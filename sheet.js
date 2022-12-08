import Time from "./time.js";

export default class Sheet {
    constructor() {
        this.timeSheet = [];
        this.difficulty = 1;
    }

    createGenesisBlock() {
        return new Time({"user" : "Genesis", "work" : 0});
    }

    
}