if(sessionStorage.getItem('auth')!=='ok'){
  var o=document.createElement('div');
  o.id='loginOverlay';
  o.style.cssText='position:fixed;inset:0;background:#000;display:flex;justify-content:center;align-items:center;z-index:99999;font-family:-apple-system,sans-serif';
  o.innerHTML='<div style="background:#1c1c1e;padding:40px;border-radius:16px;border:0.5px solid rgba(255,255,255,0.08);width:300px"><h2 style="color:#f5f5f7;font-size:18px;margin-bottom:20px;text-align:center">黑芝麻智能 · 前海展厅</h2><input id="lu" type="text" placeholder="用户名" style="width:100%;padding:10px;margin-bottom:10px;background:#2c2c2e;border:0.5px solid rgba(255,255,255,0.1);border-radius:8px;color:#f5f5f7;font-size:14px;outline:none;box-sizing:border-box"><input id="lp" type="password" placeholder="密码" style="width:100%;padding:10px;margin-bottom:16px;background:#2c2c2e;border:0.5px solid rgba(255,255,255,0.1);border-radius:8px;color:#f5f5f7;font-size:14px;outline:none;box-sizing:border-box"><button id="lb" style="width:100%;padding:10px;background:#0a84ff;color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer">登录</button><p id="le" style="color:#ff375f;font-size:12px;text-align:center;margin-top:10px;display:none">用户名或密码错误</p></div>';
  document.body.insertBefore(o,document.body.firstChild);
  document.getElementById('lb').onclick=function(){
    var u=document.getElementById('lu').value;
    var p=document.getElementById('lp').value;
    if(u==='sesamex'&&p==='showroom2026'){
      sessionStorage.setItem('auth','ok');
      o.remove();
    }else{
      document.getElementById('le').style.display='block';
    }
  };
  document.getElementById('lp').addEventListener('keydown',function(e){
    if(e.key==='Enter')document.getElementById('lb').click();
  });
}
