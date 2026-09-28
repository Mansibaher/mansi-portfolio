(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme');
  const readSetting = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const saveSetting = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ } };
  const applyTheme = theme => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    themeButton.textContent = theme === 'dark' ? '☼' : '☾';
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#261f2c' : '#fff8fb';
  };
  applyTheme(readSetting('mansi-soft-theme') === 'dark' ? 'dark' : 'light');
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme); saveSetting('mansi-soft-theme', theme);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try { await navigator.clipboard.writeText('mansiaher.work@gmail.com'); status.textContent = 'Email address copied.'; }
    catch { status.textContent = 'Select the email address above to copy it, or click it to write an email.'; }
  });
})();
