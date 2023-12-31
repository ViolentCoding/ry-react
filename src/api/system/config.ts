import request from "../request";

// 查询参数配置列表
export async function getConfigList(params?: API.System.ConfigListParams) {
  return request<API.System.ConfigPageResult>( {
		url:'/api/system/config/list',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    params
  });
}

// 查询参数配置详细
export function getConfig(configId: number) {
  return request<API.System.ConfigInfoResult>( {
		url:`/api/system/config/${configId}`,
    method: 'GET'
  });
}

// 新增参数配置
export async function addConfig(params: API.System.Config) {
  return request<API.Result>( {
		url:'/api/system/config',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: params
  });
}

// 修改参数配置
export async function updateConfig(params: API.System.Config) {
  return request<API.Result>( {
		url:'/api/system/config',
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: params
  });
}

// 删除参数配置
export async function removeConfig(ids: string) {
  return request<API.Result>( {
		url:`/api/system/config/${ids}`,
    method: 'DELETE'
  });
}

// 导出参数配置
export function exportConfig(params?: API.System.ConfigListParams) { 
  return request<API.Result>( {
		url:`/api/system/config/export`,
    method: 'GET',
    params
  });
}


// 刷新参数缓存
export function refreshConfigCache() {
  return request<API.Result>( {
		url:'/api/system/config/refreshCache',
    method: 'delete'
  })
}
