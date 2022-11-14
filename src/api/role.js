import request from '@/utils/request'

export function pageRoles(params) {
  return request({
    url: '/admin/system/role/page',
    method: 'get',
    params
  })
}
