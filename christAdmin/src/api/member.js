import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/member/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/member/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/member/logout',
    method: 'post'
  })
}
