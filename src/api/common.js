// 请求统一管理
import Request from '@/common/request';

// Common
export const testHome = data => Request.postJson('/product/list', data);
