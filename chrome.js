// shared site header and footer: pages place <script src="/chrome.js" data-part="nav|footer"></script>, never a copy of the markup
{const s=document.currentScript;
if(s.dataset.part==='footer')s.insertAdjacentHTML('beforebegin','<footer class="sfoot"><div class="wrap"><img class="fmark" src="/assets/dylo-mark.png" alt="DYLO"><a href="/dylo-tts-privacy/">Privacy</a><a href="mailto:dylogamingofficial@gmail.com">Contact</a><span>&copy; 2026 DYLO Gaming LLC</span></div></footer>');
else{s.insertAdjacentHTML('beforebegin',`<nav class="nav"><div class="wrap">
  <a class="brand" href="/" aria-label="DYLO Gaming"><img src="/assets/dylo-mark.png" alt="DYLO"></a>
  <div class="mid">
    <div class="menu" id="menu"><a class="l" href="/#unreal">Unreal</a><a class="l" href="/#apps">Apps</a><a class="l" href="/#community">Community</a></div>
    <span class="soc">
      <a class="ic" href="https://www.youtube.com/@DYLOGaming" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg></a>
      <a class="ic" href="https://discord.gg/AB65GBxFNT" aria-label="Discord"><svg viewBox="0 0 24 24"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.4 18.4 0 0 0-5.6 0L8.6 3a19.7 19.7 0 0 0-4.9 1.4C.6 9 -.3 13.5.1 18a19.9 19.9 0 0 0 6 3l1.3-2.1c-.7-.3-1.4-.6-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.8 19.8 0 0 0 6-3c.5-5.2-.8-9.7-3.6-13.6ZM8 15.3c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z"/></svg></a>
    </span>
  </div>
  <button class="burger" type="button" aria-label="Menu" aria-controls="menu" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
</div></nav>`);
const n=s.previousElementSibling,b=n.querySelector('.burger'),set=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
b.addEventListener('click',()=>set(!n.classList.contains('open')));n.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>set(false)));
const glide=y=>{const y0=scrollY,d=y-y0,t0=performance.now(),ms=Math.min(650,300+Math.abs(d)/8);const f=t=>{const k=Math.min(1,(t-t0)/ms);scrollTo(0,y0+d*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const go=(a,e)=>{if(a.pathname!==location.pathname)return;const el=a.hash?document.querySelector(a.hash):null;e.preventDefault();history.replaceState(null,'',a.hash||a.pathname);glide(el?el.getBoundingClientRect().top+scrollY:0)};
n.querySelectorAll('a.l,a.brand').forEach(a=>a.addEventListener('click',e=>go(a,e)));
document.addEventListener('touchstart',()=>{},{passive:true})}}
