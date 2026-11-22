document.getElementById('summarize').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const result = document.getElementById('result');
  result.value = 'Summarizing... (connect AI API in production)';
  // In production: extract text via scripting.executeScript and call API
});

document.getElementById('rewrite').addEventListener('click', () => {
  document.getElementById('result').value = 'Rewrite feature: select text on page, then click. Add OpenAI key in options.';
});
