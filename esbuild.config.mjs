#!/usr/bin/env node
import * as esbuild from 'esbuild';
import fs from "fs";
import path from "path";

const allFiles = [];
getAllFiles("electron/");

await esbuild.build({
    logLevel: "info",
    entryPoints: allFiles,
    format: "cjs",
    bundle: true,
    minify: true,
    platform: 'node',
    external: ['electron'],
    outExtension: {
        ".js": ".cjs",
    },
    outdir: "./dist/",
});

function getAllFiles(directoryPath) {
    const filesInDirectory = fs.readdirSync(directoryPath);

    for (const file of filesInDirectory) {
        const absolute = path.join(directoryPath, file);
        if (fs.statSync(absolute).isDirectory()) {
            getAllFiles(absolute);
        } else if (file.endsWith("ts")) {
            allFiles.push(absolute);
        }
    }
}
