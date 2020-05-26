<div align="center">
    <h1>
        <br/>
        <br/>
        👍
        <br />
        Taro3 Hooks
        <br />
        <br />
        <br />
        <br />
    </h1>
    <strong>Taro3 必备的基础 <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>.</strong>
    <br />
    <br />
    <sub>
    当前代码提交频繁, 一些特性时有变化.
    </sub>
    <br />
    <br />
    <a href="https://github.com/tarojsx/hooks/blob/master/LICENSE">
        <img src="https://badgen.net/github/license/tarojsx/hooks" alt="License" />
    </a>
    <a href="https://www.npmjs.com/package/@tarojsx/hooks">
        <img src="https://badgen.net/npm/v/@tarojsx/hooks" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/org/tarojsx">
        <img src="https://badgen.net/npm/dt/@tarojsx/hooks" alt="npm downloads" />
    </a>
    <a href="https://github.com/tarojsx/hooks/blob/master/package.json">
        <img src="https://badgen.net/github/dependents-pkg/tarojsx/hooks" alt="dependents" />
    </a>
    <a href="http://makeapullrequest.com">
        <img src="https://badgen.net/badge/PRs/welcome/green" alt="PRs welcome" />
    </a>
    <br />
    <sup>
        Built with :purple_heart: by
        <a href="https://github.com/cncolder">@Colder</a> and
        <a href="https://github.com/tarojsx/ui/graphs/contributors">
            Contributors
        </a>
        <br />
        :star2: :eyes: :zap: :boom:
    </sup>
    <br />
    <br />
    <br />
    <br />
    <pre>npm i <a href="https://www.npmjs.com/@tarojsx/hooks">@tarojsx/hooks</a></pre>
    <br />
    <br />
    <br />
    <br />
    <br />
</div>

## 用法

Hooks API 需要 React [`16.8.0`](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) 及以上版本.

可以单独导入:

```js
import useRouterParams from '@tarojsx/hooks/dist/useRouterParams'
```

或使用 ES6 命名导入:

```js
import { useRouterParams } from '@tarojsx/hooks'
```

如果想使用 ES6 命名导入, 又不想全部打包, 推荐使用 [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) 并在 `babel.config.js` 中添加以下配置:

```js
module.exports = {
    plugins:[
        [
            'import',
            {
                libraryName: '@tarojsx/hooks',
                libraryDirectory: 'dist',
                camel2DashComponentName: false,
                transformToDefaultImport: false,
            },
            'import @tarojsx/hooks',
        ]
    ]
}
```

## 参考

- **基础**
  - [useThrottleCallback](./docs/useThrottleCallback.mdx) &mdash; 函数节流.

- **环境**
  - [useRouterParams](./docs/useRouterParams.mdx) &mdash; 获取页面路由参数.
  
- **界面**
  - [useNavigationBar](./docs/useNavigationBar.mdx) &mdash; 动态更新导航栏属性.
  - [usePullDownRefresh](./docs/usePullDownRefresh.mdx) &mdash; 监听用户下拉刷新事件, 回调完成后自动收起.

- **生命周期**
  - [useDidShowAgain](./docs/useDidShowAgain.mdx) &mdash; 页面**再次**展示时的回调.
  - [useLogger](./docs/useLogger.mdx) &mdash; 打印组件生命周期.

## 支持

欢迎各种形式的支持. 至少可以给颗星 :star:

## License

[MIT](LICENSE)
