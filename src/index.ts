// gosling.js should deploy @types/gosling.js
// @ts-ignore
import { GoslingSpec } from 'gosling.js';

// Individual Themes
// Based on https://github.com/gosling-lang/gosling.js/blob/58121b0d536e34c02cea9b2c046cc9efa734fe94/src/core/utils/theme.ts#L5
import { light } from './light';
import { dark } from './dark';
import { test } from './test';

export const Themes = {
    light,
    dark,
    // just for testing this. Remove when start implementing
    test
}

export function getTheme(key: string) {
    const valid = Object.keys(Themes).indexOf(key) !== -1;
    return valid ? (Themes as any)[key] : Themes['light'];
}