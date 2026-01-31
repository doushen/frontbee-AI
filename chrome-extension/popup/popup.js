// Tab 切换
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // 移除所有 active
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // 添加 active
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// 快速提问
document.querySelectorAll('.quick-prompt').forEach(prompt => {
  prompt.addEventListener('click', () => {
    document.getElementById('chat-input').value = prompt.dataset.prompt + ':\n\n';
    document.getElementById('chat-input').focus();
  });
});

// 发送消息
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const status = document.getElementById('chat-status');
  const question = input.value.trim();
  
  if (!question) {
    status.textContent = '请输入问题';
    return;
  }
  
  status.textContent = '⏳ 思考中...';
  
  // TODO: 接入 AI API（Claude/OpenAI/通义千问）
  // 这里先模拟一个回复
  setTimeout(() => {
    const responses = [
      '这是一个很好的问题！让我帮你分析一下...\n\n由于这是演示版本，暂时连接不到 AI API。请配置你的 API Key。',
      '🐝 蜂巢提示：\n\nAI 功能需要配置 API Key 才能使用。\n\n你可以：\n1. 申请 Claude API\n2. 申请 OpenAI API\n3. 使用通义千问 API\n\n在设置中添加你的 API Key 即可使用！',
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    alert(randomResponse);
    status.textContent = '✅ 已发送（演示模式）';
    input.value = '';
  }, 1000);
}

// 保存提示词
document.getElementById('save-prompt-btn').addEventListener('click', async () => {
  const title = document.getElementById('prompt-title').value.trim();
  const content = document.getElementById('prompt-content').value.trim();
  
  if (!title || !content) {
    alert('请填写标题和内容');
    return;
  }
  
  // 获取已保存的提示词
  const { prompts = [] } = await chrome.storage.local.get('prompts');
  
  // 添加新提示词
  prompts.push({ title, content, createdAt: Date.now() });
  
  // 保存
  await chrome.storage.local.set({ prompts });
  
  alert('✅ 提示词已保存！');
  document.getElementById('prompt-title').value = '';
  document.getElementById('prompt-content').value = '';
});

// 查看提示词
document.getElementById('view-prompts-btn').addEventListener('click', async () => {
  const { prompts = [] } = await chrome.storage.local.get('prompts');
  
  if (prompts.length === 0) {
    alert('还没有保存的提示词');
    return;
  }
  
  const list = prompts.map((p, i) => `${i + 1}. ${p.title}`).join('\n');
  alert(`已保存的提示词：\n\n${list}`);
});

// 工具箱 - JSON 格式化
document.getElementById('json-format-btn').addEventListener('click', () => {
  const input = prompt('输入 JSON：');
  if (input) {
    try {
      const obj = JSON.parse(input);
      alert(JSON.stringify(obj, null, 2));
    } catch (e) {
      alert('无效的 JSON：' + e.message);
    }
  }
});

// 工具箱 - Base64
document.getElementById('base64-btn').addEventListener('click', () => {
  const input = prompt('输入要编码/解码的文本：');
  if (input) {
    try {
      // 尝试解码
      const decoded = atob(input);
      alert(`解码结果：\n${decoded}`);
    } catch {
      // 编码
      const encoded = btoa(input);
      alert(`编码结果：\n${encoded}`);
    }
  }
});

// 工具箱 - 时间戳
document.getElementById('timestamp-btn').addEventListener('click', () => {
  const now = Date.now();
  const date = new Date();
  alert(`当前时间戳：${now}\n格式化时间：${date.toLocaleString('zh-CN')}`);
});

// 工具箱 - 颜色转换（演示）
document.getElementById('color-btn').addEventListener('click', () => {
  alert('🎨 颜色转换工具开发中...\n\n支持：HEX ↔ RGB ↔ HSL');
});

// 初始化
console.log('🐝 蜂巢 AI 助手已加载');
