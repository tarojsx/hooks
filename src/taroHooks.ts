import { useRef } from 'react'
import Taro from '@tarojs/taro'

/**
 * 对 Taro 专有 Hooks 进行包装, 在 hook 之外采用 ref 实现改变 callback 但不更新 hook 依赖的效果.
 *
 * 当前版本 taro 3.0.0-rc.3 仍然没有解决专有 hooks 依赖更新的问题, 一旦依赖更新, 新的 callback 会被 push 到回调函数数组中, 下次调用时新旧回调一起调用, 这有违直觉.
 *
 * @param hook Taro 专有 hook.
 */
function taroHooks<F extends (...args: any) => any>(hook: F) {
    return (callback: Parameters<F>[0]) => {
        /** 保持 callback ref, 每个 render 周期更新 callback. */
        const callbackRef = useRef(callback)
        if (callbackRef.current !== callback) callbackRef.current = callback

        // hook 本身因为没有依赖所以不会改变, 但是实际调用的 callback ref 有机会得到更新.
        return hook((...args: any) => callbackRef.current(...args))
    }
}

/**
 * 页面展示时的回调
 */
export const useDidShow = taroHooks(Taro.useDidShow)

/**
 * 页面隐藏时的回调
 */
export const useDidHide = taroHooks(Taro.useDidHide)

/**
 * 监听用户下拉刷新事件
 */
export const usePullDownRefresh = taroHooks(Taro.usePullDownRefresh)

/**
 * 监听用户上拉触底事件
 */
export const useReachBottom = taroHooks(Taro.useReachBottom)

/**
 * 监听用户滑动页面事件
 */
export const usePageScroll = taroHooks(Taro.usePageScroll)

/**
 * 小程序屏幕旋转时触发
 */
export const useResize = taroHooks(Taro.useResize)

/**
 * 监听用户点击页面内转发按钮（button 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容
 */
export const useShareAppMessage = taroHooks(Taro.useShareAppMessage)

export const useTabItemTap = taroHooks(Taro.useTabItemTap)

export const useTitleClick = taroHooks(Taro['useTitleClick'] as (cb: () => any) => any)

export const useOptionMenuClick = taroHooks(Taro['useOptionMenuClick'] as (cb: () => any) => any)

export const usePullIntercept = taroHooks(Taro['usePullIntercept'] as (cb: () => any) => any)

export const useReady = taroHooks(Taro['useReady'] as (cb: () => any) => any)
