import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ElementKey } from '../../env/global'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'



Then(
    /^the "([^"]*)" page should contain the "([^"]*)" button$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables,
        } = this;
        console.log(`The ${elementKey} should contain the ${expectedElementText} button`);
        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig)
        const locator = page.locator(elementIdentifier)
        await expect(locator).toHaveText(expectedElementText);
    }
)