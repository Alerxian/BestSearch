# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` | `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

打包：`yarn build` | `npm build`
其它脚本：
`yarn lint`运行 eslint，并对 src 下的文件 eslint 格式化；
`yarn prettier`运行 prettier，对代码进行格式化修改；

1. 项目采用 Create React App 搭建，推荐用 yarn 来代替 npm 运行；
2. 项目添加了 eslint + Typescript，配合 prettier 实现了代码风格统一,不符合 eslint 要求的代码会在运行时和打包时报错，并对 vscode 编辑器做了设置，自动保存代码并格式化；
3. 添加 husky 钩子，配合 commitlint 实现了提交信息的一致性，可在 commitlint.config.js 中查看配置；
4. 代码提交到远程仓库前，会自动运行`yarn build`打包成功后才能提交到远程仓库，确保部署的代码正确打包；
