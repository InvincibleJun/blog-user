import { notification } from 'antd'

const baseUrl = '/api'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    // credentials: 'include',
  }
  url = /http:\/\/|https:\/\//.test(url) ? url : baseUrl + url
  const newOptions = { ...defaultOptions, ...options }

  if (newOptions.processData !== false) {
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      }
      newOptions.body = JSON.stringify(newOptions.body)
    }
  }

  if (
    newOptions.query !== undefined &&
    newOptions.query !== null &&
    newOptions.query !== ''
  ) {
    let tmp = []
    Object.keys(newOptions.query).forEach(key => {
      let val = newOptions.query[key]
      if (val) {
        tmp.push(
          encodeURIComponent(key) +
            '=' +
            encodeURIComponent(newOptions.query[key])
        )
      }
    })
    url = url + '?' + tmp.join('&')
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(response => (response.success ? response.data : null))
    .catch(error => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message
        })
      } else if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message
        })
      }
      return error
    })
}
