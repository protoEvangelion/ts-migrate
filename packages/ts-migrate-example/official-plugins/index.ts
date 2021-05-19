/* eslint-disable */
import path from "path";
import { migrate, MigrateConfig } from "ts-migrate-server";
// import explicityAnyPlugin from "./plugins/explicit-any";
// import tsIgnorePlugin from "./plugins/ts-ignore";
// import eslintFixPlugin from "./plugins/eslint-fix";

import {
    jsDocPlugin,
    applyLineBreaks,
    declareMissingClassPropertiesPlugin,
    hoistClassStaticsPlugin,
    memberAccessibilityPlugin,
    reactClassLifecycleMethodsPlugin,
    reactClassStatePlugin,
    reactDefaultPropsPlugin,
    reactPropsPlugin,
    reactShapePlugin,
} from "ts-migrate-plugins";

// it will change content of the index.ts in the input folder
async function runMigration() {
    const inputDir = path.resolve(__dirname, `../${process.argv[2]}`);

    console.log(`Running migration on ${inputDir}`);

    const config = new MigrateConfig()
        // run eslint fix first to fix the no parens issue: https://github.com/airbnb/ts-migrate/issues/39
        // .addPlugin(eslintFixPlugin, {})
        // conversionsPlugin causes crazy formatting issues
        // .addPlugin(addConversionsPlugin, {})
        // .addPlugin(declareMissingClassPropertiesPlugin, {})
        // .addPlugin(hoistClassStaticsPlugin, {})
        // .addPlugin(memberAccessibilityPlugin, {})
        // .addPlugin(reactClassLifecycleMethodsPlugin, {})
        // .addPlugin(reactClassStatePlugin, {})
        // .addPlugin(reactDefaultPropsPlugin, {})
        // .addPlugin(reactPropsPlugin, {})
        // .addPlugin(reactShapePlugin, {})
        .addPlugin(jsDocPlugin, { annotateReturns: true });
    // .addPlugin(explicityAnyPlugin, {})
    // .addPlugin(eslintFixPlugin, {})
    // .addPlugin(tsIgnorePlugin, {})

    const exitCode = await migrate({ rootDir: inputDir, config });

    applyLineBreaks(inputDir);

    process.exit(exitCode);
}

runMigration();

/* eslint-enable */
