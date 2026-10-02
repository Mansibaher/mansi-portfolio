(() => {
  const button=document.getElementById('case-theme');
  function apply(theme){document.documentElement.dataset.theme=theme;button.textContent=theme==='dark'?'☼':'☾';button.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);}
  let saved;try{saved=localStorage.getItem('mansi-studio-theme');}catch{}
  apply(saved==='light'?'light':'dark');
  button.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';apply(theme);try{localStorage.setItem('mansi-studio-theme',theme);}catch{}});
})();
