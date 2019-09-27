const pluginVerToSemVer = pluginVer => {
  const version = (parseFloat(pluginVer) / 100).toFixed(2)
  const matches = version.match(/(\d+)\.(\d)(\d?)/)
  if (!matches) return null
  return `${matches[1]}.${matches[2]}.${matches[3] ? matches[3] : '0'}`
}

const createPluginZipFileName = () => {
  const config = require('./src/manifest.json')
  const desc = config.name.en
    .toLowerCase()
    .replace(/(\s|_)/g, '-')
    .replace(/[^a-z0-9-]+/g, '')
  const semver = pluginVerToSemVer(config.version)
  return `${desc}-${semver}.zip`
}

const pluginZipFileName = createPluginZipFileName()

module.exports = {
  pluginZipFileName,
  pluginZipFilePath: `./dist/${pluginZipFileName}`,
  pluginVerToSemVer,
}
