import devConfig from './dev.env'
import proConfig from './pro.env'
import testConfig from './test.env'

let config = {}
switch (process.env.VUE_APP_FLAG) {
  case 'prod':
    config = proConfig
    break;
  case 'test':
    config = testConfig
    break;
  default:
    config = devConfig
    break;
}

export default config
