import type { Model } from "./types"

export const defaultEnv = {
  CLIENT_GLOBAL_SETTINGS: {
    APIKey: "",
    password: "",
    enterToSend: true
  },
  CLIENT_SESSION_SETTINGS: {
    // 0-2
    title: "",
    saveSession: true,
    APITemperature: 0.6,
    continuousDialogue: true,
    APIModel: "gpt-3.5-turbo" as Model
  },
  CLIENT_DEFAULT_MESSAGE: `Powered by OpenAI Vercel
- ***Author: [ChiHaoLu](https://chihaolu.me)([chihaolu.eth](https://chihaolu.eth.xyz))***
- ***使用此服務代表你熟知以下事項：***
    1. 我知道 ChatGPT 的服務有可能提供錯誤或過時資訊，我保證會自行勘誤並且對其提供的結果斟酌使用
    1. 我知道使用這個服務，在某些國家、地區、機構、學院等任何時地情況下都有可能違反相關法律、命令、規則、約定，我保證會自行確認在一切合規的情況下使用，且負擔一切責任
    1. 我知道這個服務並不會收取我的任何費用，我使用的是自己的 API Key 的額度
- 每個人需要填入自己的 OpenAI API Key，如何註冊且使用請看[此處]()
- 輸入 [[/]][[/]] 或者 [[空格]][[空格]] 可以切換對話，搜索歷史消息
- [[Shift]] + [[Enter]] 換行。開頭輸入 [[/]] 或者 [[空格]] 搜索 Prompt 预預設，[[↑]] 可編輯最近一次提問。
- 此專案修改自 [此處](https://github.com/ChiHaoLu/AllPaGPT#Reference)
`,
  CLIENT_MAX_INPUT_TOKENS: {
    "gpt-3.5-turbo": 4 * 1024,
    "gpt-4": 8 * 1024,
    "gpt-4-32k": 32 * 1024
  } as Record<Model, number>,
  OPENAI_API_BASE_URL: "api.openai.com",
  OPENAI_API_KEY: "",
  TIMEOUT: 30000,
  PASSWORD: "",
  SEND_KEY: "",
  SEND_CHANNEL: 9,
  NO_GFW: false
}

export type SessionSettings = typeof defaultEnv.CLIENT_SESSION_SETTINGS
