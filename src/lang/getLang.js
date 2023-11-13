import { getDictionary } from './index'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'zh-CN,en,en-US;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['zh-CN','en-US','en', 'nl-NL', 'nl']
let defaultLocale = 'zh-CN'
// ['zh-CN', 'en', 'en-GB', 'en-US']
let lang = match(languages, locales, defaultLocale)
let localLang;
switch (lang) {
  case "zh-CN":
    localLang = "zh";
    break;
  case "en":
    localLang = "en";
    break;
  case "en-US":
    localLang = "en";
    break;
  default:
    localLang = "zh";
    break;
}
let resultLang = await getDictionary(localLang)
export default  resultLang
