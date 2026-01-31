# 🐝 蜂巢 Chrome 插件安装指南

## 方法一：开发者模式安装（推荐用于开发）

### 步骤 1：打开扩展程序管理
1. 打开 Chrome 浏览器
2. 地址栏输入：`chrome://extensions/`
3. 打开右上角的 **「开发者模式」**

### 步骤 2：加载插件
1. 点击左上角的 **「加载已解压的扩展程序」**
2. 选择文件夹：`frontbee-AI/chrome-extension`
3. 插件已安装！🎉

### 步骤 3：测试
1. 点击地址栏右边的蜂巢图标 🐝
2. 打开 popup 界面
3. 试试各个功能

---

## 方法二：打包发布（正式发布时使用）

### 打包插件
1. 打开 `chrome://extensions/`
2. 开启 **开发者模式**
3. 点击 **「打包扩展程序」**
4. 选择扩展程序根目录：`frontbee-AI/chrome-extension`
5. 点击 **「打包扩展程序」**
6. 生成 `.crx` 文件

### 发布到 Chrome 商店
1. 打开 [Chrome 开发者控制台](https://chrome.google.com/webstore/devconsole)
2. 支付开发者费用（$5）
3. 上传 `.crx` 文件
4. 填写应用信息
5. 提交审核

---

## 功能说明

### 🎯 核心功能
- **AI 对话** - 快速提问，调用 AI API
- **提示词管理** - 保存常用提示词
- **开发者工具** - JSON 格式化、Base64、时间戳等

### 🔧 页面注入
- **GitHub** - 代码块旁边添加「AI 解释」按钮
- **掘金** - 文章顶部添加「AI 总结」按钮
- **知乎** - 回答下方添加「AI 优化」按钮

### ⌨️ 右键菜单
- 选中文字后右键
- 「解释这段代码」
- 「翻译成中文」
- 「优化这段代码」

---

## 配置 AI API

插件目前是**演示模式**，需要配置 API Key 才能使用 AI 功能。

### 支持的 API
- OpenAI API（GPT-3.5/4）
- Claude API（Anthropic）
- 通义千问（阿里）
- 文心一言（百度）

### 配置方法
1. 点击蜂巢图标 🐝
2. 进入「设置」
3. 输入你的 API Key
4. 选择使用的模型

---

## 更新插件

1. 修改代码后
2. 在 `chrome://extensions/` 刷新插件
3. 或者重新加载

---

## 目录结构

```
chrome-extension/
├── manifest.json          # 配置文件
├── popup/
│   ├── popup.html         # 弹出界面
│   └── popup.js           # 交互逻辑
├── content/
│   └── content.js         # 页面注入脚本
├── background/
│   └── background.js      # 后台服务
├── icons/
│   └── icon.svg           # 图标
└── _locales/
    └── zh_CN/
        └── messages.json  # 本地化
```

---

## 开发计划

- [ ] 接入 Claude API
- [ ] 接入 OpenAI API
- [ ] 接入通义千问 API
- [ ] 添加代码翻译功能
- [ ] 添加 AI 代码补全
- [ ] 支持自定义快捷键
- [ ] 添加同步功能

---

## License

MIT License - 欢迎贡献代码！

---

## 联系方式

- GitHub: https://github.com/doushen/frontbee-AI
- 问题反馈: 开 Issue
