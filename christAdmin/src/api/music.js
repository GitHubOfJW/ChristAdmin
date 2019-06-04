import request from '@/utils/request'

export function fetchList(query = {}) {
  return request({
    url: '/music/list',
    method: 'get',
    params: query
  })
}

export function createMusic(data) {
  return request({
    url: '/music/add',
    method: 'post',
    data
  })
}

export function updateMusic(data) {
  return request({
    url: `/music/edit/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id, status) {
  if (status === 'delete') {
    return request({
      url: '/music/delete/' + id,
      method: 'delete'
    })
  } else {
    return request({
      url: '/music/recover/' + id,
      method: 'put'
    })
  }
}
