import Taro from '@tarojs/taro'

import { sleep } from './utils'

/**
 * 监听用户下拉刷新事件, 回调完成后自动收起.
 *
 * @param callback 下拉回调
 * @param delay 最短间隔, 默认 300ms.
 */
export function usePullDownRefresh(callback: () => Promise<any>, delay = 300) {
    Taro.usePullDownRefresh(async () => {
        try {
            await Promise.all([callback(), sleep(delay)])
        } catch (err) {
            throw err
        } finally {
            Taro.stopPullDownRefresh()
        }
    })
}
