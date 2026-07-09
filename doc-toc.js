// Auto-generate TOC for doc pages
(function(){
  var headings=document.querySelectorAll('h1,h2,h3');
  if(headings.length<3)return;
  var toc=document.createElement('div');
  toc.style.cssText='position:fixed;top:48px;right:0;bottom:0;width:200px;padding:16px;background:rgba(28,28,30,0.6);backdrop-filter:blur(20px);border-left:0.5px solid rgba(255,255,255,0.08);overflow-y:auto;font-size:11px;z-index:50';
  var title=document.createElement('div');
  title.style.cssText='font-size:10px;font-weight:600;color:#98989d;text-transform:uppercase;margin-bottom:8px';
  title.textContent='目录';
  toc.appendChild(title);
  headings.forEach(function(h,i){
    h.id='sec'+i;
    var a=document.createElement('a');
    a.href='#sec'+i;
    a.textContent=h.textContent.substring(0,30);
    var indent=h.tagName==='H1'?'0px':h.tagName==='H2'?'12px':'24px';
    a.style.cssText='display:block;padding:4px 8px;color:#f5f5f7;text-decoration:none;border-radius:6px;margin-bottom:2px;padding-left:'+indent+';transition:background .15s';
    a.onmouseenter=function(){this.style.background='rgba(255,255,255,0.06)'};
    a.onmouseleave=function(){this.style.background=''};
    a.onclick=function(){document.body.style.marginRight='200px'};
    toc.appendChild(a);
  });
  document.body.appendChild(toc);
  document.body.style.marginRight='200px';
})();
