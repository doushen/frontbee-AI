// 🐝 蜂巢后台服务脚本

console.log('🐝 蜂巢后台服务已启动');

// 监听安装事件
chrome.runtime.onInstalled.addListener((details) => {
  console.log('🐝 蜂巢已安装/更新：', details.reason);
  
  // 设置默认配置
  chrome.storage.local.set({
    apiKey: '',
    selectedModel: 'claude',
    prompts: [],
    settings: {
      autoTranslate: false,
      showTips: true
    }
  });
});

// 监听快捷键
chrome.commands.onCommand.addListener((command) => {
  if (command === 'open-popup') {
    chrome.action.openPopup();
  }
});

// 监听来自 content script 的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ANALYZE_CODE') {
    // 分析代码（未来接入 AI）
    analyzeCode(message.code, sender.tab.id);
    sendResponse({ received: true });
  }
});

async function analyzeCode(code, tabId) {
  // TODO: 接入 AI API 分析代码
  console.log('🐝 分析代码：', code.substring(0, 100));
}

// 右键菜单
chrome.contextMenus.create({
  id: 'beehive-menu',
  title: '🐝 蜂巢 AI',
  contexts: ['selection', 'page']
});

chrome.contextMenus.create({
  id: 'explain-code',
  parentId: 'beehive-menu',
  title: '解释这段代码',
  contexts: ['selection']
});

chrome.contextMenus.create({
  id: 'translate-code',
  parentId: 'beehive-menu',
  title: '翻译成中文',
  contexts: ['selection']
});

chrome.contextMenus.create({
  id: 'optimize-code',
  parentId: 'beehive-menu',
  title: '优化这段代码',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'explain-code') {
    chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_RESULT',
      title: 'AI 解释',
      content: '🐝 蜂巢：\n\nAI 解释功能需要配置 API Key。\n\n请打开插件设置添加你的 AI API Key。'
    });
  }
  
  if (info.menuItemId === 'translate-code') {
    chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_RESULT',
      title: '翻译结果',
      content: '🐝 蜂巢：\n\n翻译功能开发中...'
    });
  }
  
  if (info.menuItemId === 'optimize-code') {
    chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_RESULT',
      title: '优化建议',
      content: '🐝 蜂巢：\n\n代码优化功能需要配置 API Key。\n\n请打开插件设置添加你的 AI API Key。'
    });
  }
});

console.log('🐝 蜂巢后台服务加载完成');
