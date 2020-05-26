import { useRef, useCallback } from 'react'

/**
 * 函数防抖
 *
 * 首次一定调用, 之后在 delay 时间后才会调用. 如果不指定 delay, 相当于直接调用.
 *
 * @param fn 函数回调
 * @param delay 最小间隔, 单位: ms. 默认: 500ms.
 */
export function useThrottleCallback<T extends (...args: any[]) => any>(fn: T, delay: boolean | number) {
    const timeRef = useRef(0)

    const throttleHandler = useCallback(
        (...args: any[]) => {
            if (!fn) return

            const gap = delay === true ? 500 : delay
            const now = Date.now()

            if (now - timeRef.current <= gap) return

            fn(...args)
            timeRef.current = now
        },
        [fn, delay]
    ) as T

    return delay ? throttleHandler : fn
}
