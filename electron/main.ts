import { app, BrowserWindow } from 'electron'
import path from 'path'

import ExampleBackend from './exampleRessource/exampleBackend';

const IS_DEV = !app.isPackaged;

const exampleBackend = new ExampleBackend();

async function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs')
        }
    });

    if (IS_DEV) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
        win.removeMenu();
    } else {
        win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
        win.removeMenu();
    }

    exampleBackend.onReady();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', app.quit);
