/* ═══ 主题切换共享逻辑 ═══ */
(function(){
  var saved=localStorage.getItem('smx-theme');
  if(saved==='light')document.documentElement.setAttribute('data-theme','light');
})();

function smxToggleTheme(btn){
  var cur=document.documentElement.getAttribute('data-theme');
  if(cur==='light'){
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('smx-theme','dark');
    if(btn)btn.textContent='🌙';
  }else{
    document.documentElement.setAttribute('data-theme','light');
    localStorage.setItem('smx-theme','light');
    if(btn)btn.textContent='☀️';
  }
}

/* 页面加载时初始化按钮图标 */
document.addEventListener('DOMContentLoaded',function(){
  var cur=document.documentElement.getAttribute('data-theme');
  var btns=document.querySelectorAll('.smx-theme-toggle');
  btns.forEach(function(b){b.textContent=cur==='light'?'☀️':'🌙'});
});
