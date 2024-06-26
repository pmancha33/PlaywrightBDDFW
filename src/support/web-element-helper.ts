import { Page } from 'playwright'
import { ElementKey, ElementLocator, GlobalConfig, GlobalVariables } from "../env/global"

export const getElementLocator = (
    // page: PageTransitionEvent,
    page: Page,
    elementKey: ElementKey,
    glovalVaribles: GlobalVariables,
    globalConfig: GlobalConfig,
): ElementLocator => {
    const { pageElementMappings } = globalConfig;
    const currentPage = glovalVaribles.currentScreen;
    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey]


}

