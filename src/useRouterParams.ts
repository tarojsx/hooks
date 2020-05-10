import { useRouter, RouterInfo } from '@tarojs/taro'

/**
 * 获取页面路由参数
 */
export function useRouterParams(): RouterInfo['params']
export function useRouterParams(key: string): string
export function useRouterParams<T>(key: string, transformer: (value: string) => T): T
export function useRouterParams(key?: string, transformer?: Function) {
    const { params } = useRouter()

    if (!key) {
        return params
    }

    const value = params[key]

    if (typeof transformer === 'function') {
        return transformer(value)
    } else if (typeof value === 'string') {
        return decodeURIComponent(value)
    }

    return value
}
