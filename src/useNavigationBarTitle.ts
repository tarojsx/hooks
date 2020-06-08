import { useNavigationBar } from './useNavigationBar'

/**
 * 更新页面导航栏标题
 */
export function useNavigationBarTitle(title: string) {
    useNavigationBar({ title })
}
