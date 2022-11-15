import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}


export function pageUsers(params) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params
  })
}


export function deleteUser(id) {
  return request({
    url: `/admin/user/delete/${id}`,
    method: 'post'
  })
}

export function updateUser(data) {
  return request({
    url: `/admin/user/update`,
    method: 'post',
    data
  })
}

export function saveUser(data) {
  return request({
    url: `/admin/user/save`,
    method: 'post',
    data
  })
}
