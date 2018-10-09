import axios from 'axios'
import qs from 'qs'

class Ajax {
  constructor(options) {
    this.commonPath = (options || {}).commonPath ? options.commonPath : 'api/v1'
    this.getMap = {}
    this.postMap = {}
    this.putWayMap = {}
    this.patchMap = {}
    this.deleteMap = {}
  }

  /**
   * 解析参数，拼接到 path 上
   * @param  {[string]} path   [原始 path]
   * @param  {[string || object]} params [要拼接到 path 上的参数]
   * @return {[string]}        [拼接过后的 path]
   */
  parse(path, params) {
    if (typeof params === 'string') {
      return path + '/' + params
    }
    if (typeof params === 'object') {
      let search = '?'
      let counter = 0
      for (let key in params) {
        if (counter) search += '&'
        search += key + '=' + params[key]
        counter++
      }
      return path + search
    }
    return path
  }

  get(path, prevConfig = { cache: false, returnRes: true }) {
    if (!this.getMap[path]) {
      this.getMap[path] = (params, lastConfig) => {
        const config = { ...prevConfig, ...lastConfig }
        if (!config.cache) {
          const headers = (config.headers = config.headers || {})
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        // 将参数直接拼接到path中
        path = this.parse(path, params)
        const commonPath = config.commonPath || this.commonPath
        return axios
          .get(commonPath + path, config)
          .then(res => (config.returnRes ? res : res.data), res => res)
          .catch(err => {
            throw new Error(JSON.stringify(res))
          })
      }
    }
    return this.getMap[path]
  }

  post(path, prevConfig = { cache: false, returnRes: true }) {
    return common(
      'post',
      path,
      (prevConfig = { cache: false, returnRes: true })
    )()
  }

  common(method, path, prevConfig = { cache: false, returnRes: true }) {
    let cacheFun = this[`${method}Map`][path]
    if (!cacheFun) {
      cacheFun = (params, lastConfig) => {
        const config = { ...prevConfig, ...lastConfig }
        if (!config.cache) {
          const headers = (config.headers = config.headers || {})
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        // get 请求下将参数直接拼接到path中
        if (method === 'get') {
          path = this.parse(path, params)
        }
        // 非 get 请求，配置项中指定用 form 表单的方式提交
        if (method !== 'get') {
          params = config.emulateJson ? qs.stringify(params) : params
          config.data = params
        }
        const commonPath = config.commonPath || this.commonPath
        // return axios.get(commonPath + path, params, config)
        // 	.then(res => config.returnRes ? res : res.data, res => res)
        // 	.cache(err => throw new Error(JSON.stringify(res)))
        return axios({
          method,
          url: commonPath + path,
          ...config
        })
          .then(res => (config.returnRes ? res : res.data), res => res)
          .catch(err => {
            throw new Error(JSON.stringify(res))
          })
      }
    }
    return cacheFun
  }
}

export default new Ajax()
