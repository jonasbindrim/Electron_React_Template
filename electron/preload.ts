import Electron from "electron";
import api from "./api";

Electron.contextBridge.exposeInMainWorld('electronAPI', api);