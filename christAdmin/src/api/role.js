import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/role/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/role/list',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/role/add',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: `/role/edit/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: `/role/delete/${id}`,
    method: 'delete'
  })
}
