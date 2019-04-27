import request from '@/utils/request'

export function fetchCateList(query = {}) {
  return request({
    url: '/rule/cates',
    method: 'get',
    params: query
  })
}

export function fetchList(query = {}) {
  return request({
    url: '/rule/list',
    method: 'get',
    params: query
  })
}

export function createRule(data) {
  return request({
    url: '/rule/add',
    method: 'post',
    data
  })
}

export function updateRule(data) {
  return request({
    url: `/rule/edit/${data.id}`,
    method: 'put',
    data
  })
}
