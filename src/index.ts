import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv'
import {
  GlobalConfig,
  HostsConfig,
  PagesConfig,
  PageelementMappings,
} from './env/global'
import * as fs from "fs";

dotenv.config({ path: env('COMMON_CONFIG_FILE') })

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))

console.log("hostsConfig", hostsConfig)
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'))
console.log("pagesConfig", pagesConfig)
const mappingFiles = fs.readdirSync(`${process.cwd()}${env('PAGE_ELEMENTS_PATH')}`)

const pageElementMappings: PageelementMappings = mappingFiles.reduce(
  (pageElementConfigAcc, file) => {
    const key = file.replace('.json', '')
    const elementMappings = getJsonFromFile(`${env('PAGE_ELEMENTS_PATH')}${file}`);
    return { ...pageElementConfigAcc, [key]: elementMappings }
  },
  {}
)

const worldParameters: GlobalConfig = {
  hostsConfig,
  pagesConfig,
  pageElementMappings,
}




const common = `./src/features/**/*.feature \
              --require-module ts-node/register \
              --require ./src/step-definitions/**/**/*.ts \
               -f json:./reports/report.json \
               --world-parameters ${JSON.stringify(worldParameters)} \
               --format progress-bar `;

const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;
export { dev, smoke, regression }