import { useCallback } from 'react'
import Taro from '@tarojs/taro'

import { sleep } from './utils'
import { usePullDownRefresh } from './taroHooks'

/**
 * 监听用户下拉刷新事件, 回调完成后自动收起.
 *
 * @param callback 下拉回调
 * @param delay 最短间隔, 默认 300ms.
 */
export function usePullDownRefreshing(callback: () => Promise<any>, delay = 300) {
    usePullDownRefresh(
        useCallback(async () => {
            try {
                await Promise.all([callback(), sleep(delay)])
            } catch (err) {
                throw err
            } finally {
                Taro.stopPullDownRefresh()
            }
        }, [callback, delay])
    )
}
