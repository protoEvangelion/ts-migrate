/* eslint-disable */
import path from "path";
import { migrate, MigrateConfig } from "ts-migrate-server";

import {
    jsDocPlugin,
    explicitAnyPlugin,
    preserveNewLinesPlugin,
    restoreNewLinesPlugin,
    declareMissingClassPropertiesPlugin,
    hoistClassStaticsPlugin,
    memberAccessibilityPlugin,
    reactClassLifecycleMethodsPlugin,
    reactClassStatePlugin,
    reactDefaultPropsPlugin,
    reactPropsPlugin,
    reactShapePlugin,
    eslintFixPlugin,
    tsIgnorePlugin
} from "ts-migrate-plugins";

// it will change content of the index.ts in the input folder

const dir = process.argv[2] || 'input';

async function runMigration() {
    const inputDir = path.resolve(__dirname, dir);

    console.log(`Running migration on ${inputDir}`);

    const config = new MigrateConfig()
        // run eslint fix first to fix the no parens issue: https://github.com/airbnb/ts-migrate/issues/39
        .addPlugin(eslintFixPlugin, {})
        .addPlugin(preserveNewLinesPlugin, {})
        .addPlugin(declareMissingClassPropertiesPlugin, {})
        .addPlugin(hoistClassStaticsPlugin, {})
        .addPlugin(memberAccessibilityPlugin, {})
        .addPlugin(reactClassLifecycleMethodsPlugin, {})
        .addPlugin(reactClassStatePlugin, {})
        .addPlugin(reactDefaultPropsPlugin, {})
        .addPlugin(reactPropsPlugin, {})
        .addPlugin(reactShapePlugin, {})
        .addPlugin(jsDocPlugin, { annotateReturns: true })
        .addPlugin(explicitAnyPlugin, {})
        .addPlugin(eslintFixPlugin, {})
        .addPlugin(tsIgnorePlugin, {
            truncationText: '...',
            hideErrorCode: true
        })
        .addPlugin(restoreNewLinesPlugin, {})


    const exitCode = await migrate({ rootDir: inputDir, config });

    process.exit(exitCode);
}

runMigration();

/* eslint-enable */
