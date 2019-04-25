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

export function fetchList(query = {}) {
  return request({
    url: '/member/list',
    method: 'get',
    params: query
  })
}

export function createMember(data) {
  return request({
    url: '/member/create',
    method: 'post',
    data
  })
}

export function updateMember(data) {
  return request({
    url: '/member/update',
    method: 'put',
    data
  })
}

export function logout() {
  return request({
    url: '/member/logout',
    method: 'delete'
  })
}
