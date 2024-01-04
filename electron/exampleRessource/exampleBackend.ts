import { randomInt } from "crypto";
import { ipcMain } from "electron";

class ExampleBackend {

    onReady() {
        ipcMain.handle("getRandomNumber", this.getRandomNumber);
    }

    getRandomNumber() {
        return randomInt(1000);
    }

}

export default ExampleBackend;