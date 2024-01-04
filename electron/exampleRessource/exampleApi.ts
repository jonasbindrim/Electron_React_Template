import { ipcRenderer } from "electron";

export default {
    getRandomNumber: (): Promise<number> => ipcRenderer.invoke("getRandomNumber"),
}