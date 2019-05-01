import request from '@/utils/request'

export function fetchList(query = {}) {
  return request({
    url: '/album/list',
    method: 'get',
    params: query
  })
}

export function createAlbum(data) {
  return request({
    url: '/album/add',
    method: 'post',
    data
  })
}

export function updateAlbum(data) {
  return request({
    url: `/album/edit/${data.id}`,
    method: 'put',
    data
  })
}
