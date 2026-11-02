// shared site header and footer: pages place <script src="/chrome.js" data-part="nav|footer"></script>, never a copy of the markup
{const s=document.currentScript;
if(s.dataset.part==='footer')s.insertAdjacentHTML('beforebegin','<footer class="sfoot"><div class="wrap"><a href="/dylo-tts-privacy/">Privacy</a><a href="mailto:dylogamingofficial@gmail.com">Contact</a><span>&copy; 2026 DYLO Gaming LLC</span></div></footer>');
else{s.insertAdjacentHTML('beforebegin',`<nav class="nav"><div class="wrap">
  <a class="brand" href="/" aria-label="DYLO Gaming"><img src="/assets/dylo-mark.png" alt="DYLO"></a>
  <div class="menu" id="menu"><a class="l" href="/#unreal">Unreal</a><a class="l" href="/#apps">Apps</a><a class="l" href="/#community">Community</a></div>
  <button class="burger" type="button" aria-label="Menu" aria-controls="menu" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</div></nav>`);
const n=s.previousElementSibling,b=n.querySelector('.burger'),set=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
b.addEventListener('click',()=>set(!n.classList.contains('open')));n.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>set(false)));
// PROTECTED — nav glide scroll to sections, confirmed working 2026-11-01 @565ef2f. Do not modify without explicit ask.
const glide=y=>{const y0=scrollY,d=y-y0,t0=performance.now(),ms=Math.min(650,300+Math.abs(d)/8);const f=t=>{const k=Math.min(1,(t-t0)/ms);scrollTo(0,y0+d*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const go=(a,e)=>{if(a.pathname!==location.pathname)return;const el=a.hash?document.querySelector(a.hash):null;e.preventDefault();history.replaceState(null,'',a.hash||a.pathname);glide(el?el.getBoundingClientRect().top+scrollY:0)};
n.querySelectorAll('a.l,a.brand').forEach(a=>a.addEventListener('click',e=>go(a,e)));
n.insertAdjacentHTML('afterend','<button class="totop" type="button" aria-label="Back to top"><svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>');
const up=n.nextElementSibling,show=()=>up.classList.toggle('on',scrollY>480);
up.addEventListener('click',()=>{history.replaceState(null,'',location.pathname);glide(0)});addEventListener('scroll',show,{passive:true});show();
document.addEventListener('touchstart',()=>{},{passive:true})}}
