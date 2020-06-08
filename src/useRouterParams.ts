import { useMemo } from 'react'
import { useRouter, RouterInfo } from '@tarojs/taro'

/**
 * 获取页面路由参数
 */
export function useRouterParams(): RouterInfo['params']
export function useRouterParams(key: string): string
export function useRouterParams<T>(key: string, transformer: (value: string) => T): T
export function useRouterParams(key?: string, transformer?: Function) {
    const routerParams = useRouter()?.params || {}

    // 路由参数不会动态改变, Taro 3.0.0-alpha.7 以下版本页面再次显示时会丢失参数.
    return useMemo(() => {
        const params = { ...routerParams }
        for (const field of Object.keys(params)) {
            if (typeof params[field] === 'string') {
                params[field] = decodeURIComponent(params[field])
            }
        }

        if (!key) {
            return params
        }

        const value = params[key]

        if (typeof transformer === 'function') {
            return transformer(value)
        }

        return value
    }, [])
}
