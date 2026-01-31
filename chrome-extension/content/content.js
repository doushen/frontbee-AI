// 🐝 蜂巢内容脚本 - 在任意页面注入

console.log('🐝 蜂巢内容脚本已加载');

// 监听来自 background 的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_PAGE_INFO') {
    // 获取当前页面信息
    sendResponse({
      url: window.location.href,
      title: document.title,
      selection: window.getSelection().toString()
    });
  }
  
  if (message.type === 'INJECT_CODE') {
    // 执行代码
    try {
      eval(message.code);
      sendResponse({ success: true });
    } catch (e) {
      sendResponse({ success: false, error: e.message });
    }
  }
});

// 注入到特定网站
const url = window.location.href;

// GitHub - 添加代码助手按钮
if (url.includes('github.com')) {
  // 在代码块旁边添加按钮
  const codeBlocks = document.querySelectorAll('pre, code');
  codeBlocks.forEach(block => {
    if (!block.querySelector('.beehive-btn')) {
      const btn = document.createElement('button');
      btn.className = 'beehive-btn';
      btn.innerHTML = '🐝 AI 解释';
      btn.style.cssText = `
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 5px 10px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
      `;
      btn.onclick = () => {
        const code = block.textContent;
        alert('🐝 蜂巢：\n\n代码已复制！\n\n点击插件图标使用 AI 解释这段代码。');
      };
      block.style.position = 'relative';
      block.appendChild(btn);
    }
  });
}

// 掘金 - 添加 AI 助手
if (url.includes('juejin.cn')) {
  const article = document.querySelector('.article-content');
  if (article) {
    const btn = document.createElement('button');
    btn.innerHTML = '🐝 AI 总结文章';
    btn.style.cssText = `
      display: block;
      width: 100%;
      padding: 15px;
      margin: 20px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
    `;
    btn.onclick = () => {
      alert('🐝 蜂巢：\n\nAI 总结功能开发中...\n\n即将上线！');
    };
    article.insertBefore(btn, article.firstChild);
  }
}

// 知乎 - 添加 AI 回答
if (url.includes('zhihu.com')) {
  const answers = document.querySelectorAll('.RichContent');
  answers.forEach(answer => {
    if (!answer.querySelector('.beehive-ai-btn')) {
      const btn = document.createElement('button');
      btn.className = 'beehive-ai-btn';
      btn.innerHTML = '🐝 AI 优化回答';
      btn.style.cssText = `
        display: inline-block;
        padding: 8px 15px;
        margin: 10px 0;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
      `;
      btn.onclick = () => {
        alert('🐝 蜂巢：\n\nAI 优化功能开发中...\n\n即将上线！');
      };
      answer.appendChild(btn);
    }
  });
}

console.log('🐝 蜂巢内容脚本加载完成');
