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
          "Github 下载": "Github",
          "依托于Electron,打造通用跨平台桌面端软件":"Based on Electron, A crossplatform desktop application is built",
          "使用极简风设计,搭配现代配色方案":"Use minimalist design with modern color scheme",
          "多元化采集,视频资源丰富":"Diversified collection, rich video resources",
          "多种主题,高度定制,缓解眼部疲劳":"A variety of themes, highly customized, relieve eye fatigue",
          "用户数据云同步,多端瞬间互联,随处追剧":"User data cloud synchronization, multi-terminal instant interconnection, chasing drama everywhere",
          "前端代码已开源,开放社区讨论和仲裁功能,软件特色由你来定":"The front-end code has been open source, open community discussion and arbitration functions, software features are up to you",
          "全平台":"Cross-platform",
          "极简风":"Minimalist style",
          "广资源":"Enumerous Resources",
          "多主题":"Multiple themes",
          "云数据":"Cloud data platform",
          "开源化":"Opensource",
          "与作者取得联系":"Get in touch with author",
          "发送消息":"Send message",
          "关于作者":"About the author",
          "主页":"Home",
          "博客":"Blog",
          "注册":"Register",
          "登陆":"Login",
          "邮件":"Email",
          "邮箱":"Email",
          "密码":"Password",
          "你必须同意用户使用协议,才能成功注册":"You must agree to the user agreement to successfully register",
          "已成功创建账户,登陆前请点击我们发送给你的邮件里的链接以确认注册":"The account has been successfully created, please click the link in the email we sent you to confirm the registration before logging in",
          "注册功能正在开发中,敬请期待":"The registration function is under development, so stay tuned",
          "重复密码":"Repeat the passward",
          "用户使用协议":"User agreement",
          "我同意":"I agree with the",
          "错误密码,请重试,或者":"Wrong password, please try again",
          "忘记密码":"Forgot password",
          "记住我":"Remeber me",
          "我们向你提供的邮箱发送了使用指南,敬请查收":"We have sent a user guide to the email address you provided, please check",
          "这个邮箱地址没有与之关联的账户":"This email address isn't associated with an account.",
          "奶牛快传":"CowTrans",

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
