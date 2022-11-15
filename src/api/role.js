import request from '@/utils/request'

export function pageRoles(params) {
  return request({
    url: '/admin/system/role/page',
    method: 'get',
    params
  })
}


export function deleteRole(id) {
  return request({
    url: `/admin/system/role/delete/${id}`,
    method: 'post'
  })
}

export function updateRole(data) {
  return request({
    url: `/admin/system/role/update`,
    method: 'post',
    data
  })
}

export function saveRole(data) {
  return request({
    url: `/admin/system/role/save`,
    method: 'post',
    data
  })
}
