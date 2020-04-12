import useEffectOnce from 'react-use/lib/useEffectOnce'
import useUpdateEffect from 'react-use/lib/useUpdateEffect'

/**
 * 打印组件生命周期.
 */
export function useLogger(log = console.log, ...rest: any[]) {
    useEffectOnce(() => {
        log(`mounted`, ...rest)
        return () => log(`unmounted`, ...rest)
    })

    useUpdateEffect(() => {
        log(`updated`, ...rest)
    })
}
