import { useState, useEffect } from 'react'
import { useDidShow, useDidHide, setNavigationBarTitle, setNavigationBarColor } from '@tarojs/taro'

interface NavigationBarOptions extends Partial<setNavigationBarTitle.Option>, Partial<setNavigationBarColor.Option> {}

/**
 * 更新页面导航栏属性
 */
export function useNavigationBar(options: NavigationBarOptions) {
    // 页面首次打开视为已显示, 因为页面首次显示时不会触发 show 事件.
    const [show, setShow] = useState(true)

    useDidShow(() => setShow(true))
    useDidHide(() => setShow(false))

    useEffect(() => {
        /**
         * BUG: TabBar 中的页面一旦打开永不 unmount.
         *  其中的 useEffect 即使在页面隐藏时也仍然会运行, 会把标题设置在错误的页面上.
         *  为防止这种情况发生, 只在页面显示后才更新标题.
         *
         * @see https://github.com/NervJS/taro/issues/5725
         */
        if (!show) return

        const { title, ...color } = options
        if (title) setNavigationBarTitle({ title })
        if (Object.keys(color)?.length) setNavigationBarColor(color as setNavigationBarColor.Option)
    }, [show, options])
}
