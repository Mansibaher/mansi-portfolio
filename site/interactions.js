(() => {
  const storage = {get(key){try{return localStorage.getItem(key);}catch{return null;}},set(key,value){try{localStorage.setItem(key,value);}catch{}}};
  const projects = [...document.querySelectorAll('.project')];
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed',String(item===button)));
    projects.forEach(project => project.hidden = filter !== 'all' && project.dataset.category !== filter);
    const count = projects.filter(project => !project.hidden).length;
    document.getElementById('project-count').textContent = filter==='all' ? 'Showing all 4 projects' : `Showing ${count} ${filter==='ai'?'AI application':'machine learning'} projects`;
  }));
  const setView = view => {
    document.getElementById('project-list').classList.toggle('grid-view',view==='grid');
    document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
  };
  setView(storage.get('mansi-project-view')==='grid'?'grid':'list');
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{setView(button.dataset.view);storage.set('mansi-project-view',button.dataset.view);}));
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function selectTab(tab){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;});}
  tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});
  const answers = {
    focus:['AI, with the engineering around it.','I work across applied AI, machine learning, and backend engineering. My projects include natural-language code search, document Q&A, MRI classification, and pipelines for sensor data.','#work','Explore my projects →'],
    project:['Start with DevPilot.','DevPilot brings together Python, FastAPI, PostgreSQL, and vector search to find relevant source code from natural-language questions. The case study includes a real recorded search, architecture decisions, and current limitations.','devpilot.html','See the DevPilot case study →'],
    research:['Listening for water leaks.','At Cal State LA, I studied leak detection using 21,120 simulated LeakDB samples and 22 pressure residual features. I compared Random Forest, SVM, and XGBoost and built an EPANET-based simulation pipeline. AquaTrace extends that work into an interactive two-zone demo with pressure charts, a separately trained detector, and experiment replay. Physical validation remains future work.','water-leak-research.html#aquatrace','Explore my research and AquaTrace →'],
    roles:['Applied AI, ML, and backend engineering.','I’m interested in opportunities where I can turn data and models into useful software. I completed my M.S. in Computer Science at Cal State LA in May 2026, with a 3.9 GPA.','mailto:mansiaher.work@gmail.com','Let’s connect ↗']
  };
  const dialog=document.getElementById('qa-dialog');
  function answer(key){const [title,text,href,label]=answers[key];document.getElementById('answer-title').textContent=title;document.getElementById('answer-text').textContent=text;const link=document.getElementById('answer-link');link.href=href;link.textContent=label;document.querySelectorAll('[data-question]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.question===key)));}
  answer('focus');
  document.querySelectorAll('.qa-open').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
  document.getElementById('qa-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
  document.querySelectorAll('[data-question]').forEach(button=>button.addEventListener('click',()=>answer(button.dataset.question)));
  document.getElementById('answer-link').addEventListener('click',()=>dialog.close());
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const motion=document.getElementById('motion-toggle');
  function setMotion(enabled){document.body.classList.toggle('motion-enabled',enabled);motion.setAttribute('aria-checked',String(enabled));motion.querySelector('span').textContent=enabled?'on':'off';}
  setMotion(!reduced.matches&&storage.get('mansi-motion')!=='off');
  motion.addEventListener('click',()=>{const enabled=motion.getAttribute('aria-checked')!=='true';setMotion(enabled);storage.set('mansi-motion',enabled?'on':'off');});
  reduced.addEventListener('change',event=>setMotion(!event.matches&&storage.get('mansi-motion')!=='off'));
  const progress=document.querySelector('.reading-progress span');
  let pending=false;
  const update=()=>{const height=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${height>0?Math.min(100,scrollY/height*100):0}%`;pending=false;};
  addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update);}},{passive:true});addEventListener('resize',update);new ResizeObserver(update).observe(document.body);update();
  const nav=[...document.querySelectorAll('header nav a[href^="#"]')];
  new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px'}).observe(document.getElementById('home'));
  const sections=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)nav.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -60% 0px'});
  document.querySelectorAll('main>section:not(#home)').forEach(section=>sections.observe(section));
})();
