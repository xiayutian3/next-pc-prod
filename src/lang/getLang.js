import { getDictionary } from "./index";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "zh-CN,en,en-US;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["zh-CN", "en-US", "en", "nl-NL", "nl"];
let defaultLocale = "zh-CN";
// ['zh-CN', 'en', 'en-GB', 'en-US']
let lang = match(languages, locales, defaultLocale);

let resultLang;
// 获取默认语言
export const getLang = async (langType = lang) => {
  resultLang = await getDictionary(langType);
  return resultLang
};

// //设置语言
// export const setLang = async (langType) => {
//   resultLang = await getDictionary(langType);
//   return resultLang
// };

