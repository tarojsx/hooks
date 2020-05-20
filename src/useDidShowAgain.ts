import { useRef } from 'react'
import { useDidShow } from '@tarojs/taro'

/**
 * 页面**再次**展示时的回调
 */
export function useDidShowAgain(callback: () => any) {
    const isFirst = useRef(true)

    return useDidShow(() => {
        if (isFirst.current) {
            isFirst.current = false
        } else {
            callback()
        }
    })
}
