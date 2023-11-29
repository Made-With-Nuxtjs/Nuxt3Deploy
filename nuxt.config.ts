// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-api-party"],

  apiParty: {
    endpoints: {
      apiCall: {
        url: process.env.API_URL!,
      },
    },
  },
  runtimeConfig: {
    public: {
      /**
       * TODO: get setting backend data from database against company code and SET Database Connection
       * ! important ! don't change this unless you know what you are doing
       */
      apiCompanyCode: process.env.COMPANY_CODE!, // BFLdemo , DB: mislayer => mislayer_bfl
      domain: process.env.DOMAIN!,
      currency: "Tk.", // Primary Currency (For Post Method)
      currencyBefore: "",
      currencyAfter: "Tk.",
      api_url: process.env.API_URL!,
    }
  }
})
