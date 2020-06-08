import { useRef } from 'react'

import { useDidShow } from './taroHooks'

/**
 * 页面**再次**显示时的回调
 *
 * @return 页面显示次数
 */
export function useDidShowAgain(callback: () => any) {
    const counterRef = useRef(0)

    useDidShow(() => {
        counterRef.current++
        if (counterRef.current > 1) {
            callback()
        }
    })

    return counterRef.current
}
