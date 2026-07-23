(() => {
const btn=document.getElementById('menuBtn'), nav=document.getElementById('nav');
btn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.reveal').forEach(el=>{if('IntersectionObserver'in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');o.unobserve(e.target);}}),{threshold:.1});o.observe(el);}else el.classList.add('show');});
const box=document.getElementById('lightbox'), img=document.getElementById('lightboxImg');
document.querySelectorAll('[data-image]').forEach(el=>el.addEventListener('click',()=>{img.src=el.dataset.image;box.showModal();}));
document.getElementById('close')?.addEventListener('click',()=>box.close());
box?.addEventListener('click',e=>{if(e.target===box)box.close();});
})();