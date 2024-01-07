#!/usr/bin/env node
import * as esbuild from 'esbuild';
import { copy } from 'esbuild-plugin-copy';

await esbuild.build({
    logLevel: "info",
    entryPoints: ["electron/main.ts", "electron/preload.ts"],
    format: "cjs",
    bundle: true,
    minify: true,
    platform: 'node',
    external: ['electron'],
    plugins: [
        copy({
            assets: {
                from: ['release-package.json'],
                to: ['package.json'],
            },
            watch: true,
        }),
    ],
    outExtension: {
        ".js": ".cjs",
    },
    outdir: "./dist/",
});
