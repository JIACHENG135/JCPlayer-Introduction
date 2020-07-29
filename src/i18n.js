import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "JCPlayer 免费视频播放器,全网资源,一网打尽":
            "JCPlayer, a free video player",
          "跨平台,多端同步数据,极致简约": "Cross-platfrom, data sync on muiltiple devices. Start enjoying now",
          "Github 下载": "Github"
        }
      },
      zh:{

      }

    //   de: {
    //     translations: {
    //       "To get started, edit <1>src/App.js</1> and save to reload.":
    //         "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
    //       "Welcome to React": "Willkommen bei React und react-i18next"
    //     }
    //   }
    },
    fallbackLng: "zh",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
