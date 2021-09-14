import Express from "express";

class App {
    public server
    constructor() {
        this.server = Express()
    }
}

export default new App().server