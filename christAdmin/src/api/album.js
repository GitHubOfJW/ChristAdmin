import request from '@/utils/request'

export function fetchList(query = {}) {
  return request({
    url: '/album/list',
    method: 'get',
    params: query
  })
}

export function fetchAlbums(query = {}) {
  return request({
    url: '/album/albums',
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

export function deleteById(id, status) {
  if (status === 'delete') {
    return request({
      url: '/album/delete/' + id,
      method: 'delete'
    })
  } else {
    return request({
      url: '/album/recover/' + id,
      method: 'put'
    })
  }
}
