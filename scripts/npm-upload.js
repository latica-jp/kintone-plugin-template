;(async () => {
  const { existsSync } = require('fs')
  const osLocale = require('os-locale')
  const { run } = require('@kintone/plugin-uploader/dist')
  const { getDefaultLang } = require('@kintone/plugin-uploader/dist/lang')

  const { pluginZipFilePath } = require('../webpack-utils')
  const { waitForFileCreateOrUpdate } = require('./utils')

  const args = process.argv.slice(2)
  const isWatchMode = args.includes('--watch')
  const zipFileExists = () => existsSync(pluginZipFilePath)

  if (!isWatchMode) {
    if (!zipFileExists()) {
      console.error(`Missing zip file '${pluginZipFilePath}'.`)
      return
    }
  } else {
    try {
      const result = await waitForFileCreateOrUpdate(pluginZipFilePath)
      console.info(`Zip file '${pluginZipFilePath}' ${result}!`)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  const env = require('dotenv').config().parsed
  const options = { lang: getDefaultLang(osLocale.sync()), watch: isWatchMode }
  run(
    env.KINTONE_DOMAIN,
    env.KINTONE_USERNAME,
    env.KINTONE_PASSWORD,
    pluginZipFilePath,
    options
  )
})()
