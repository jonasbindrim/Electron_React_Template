import { test, _electron } from "@playwright/test";

test('Launch Application', async () => {
    const electronApp = await _electron.launch({ args: ['dist/main.cjs']})
    const window = await electronApp.firstWindow();
    await electronApp.close();
});