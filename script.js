// Galerie modal (project images)
document.querySelectorAll('.gallery-item').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const src = btn.getAttribute('data-src');
    const modal = document.getElementById('imgModal');
    const img = modal.querySelector('.modal-image');
    img.src = src;
    img.alt = btn.querySelector('img').alt || '';
    modal.setAttribute('aria-hidden','false');
    modal.focus();
  });
});
document.querySelector('#imgModal .modal-close').addEventListener('click', ()=>{
  const modal = document.getElementById('imgModal');
  modal.setAttribute('aria-hidden','true');
  modal.querySelector('.modal-image').src = '';
});
document.getElementById('imgModal').addEventListener('click', (e)=>{
  if(e.target === e.currentTarget) {
    e.currentTarget.setAttribute('aria-hidden','true');
    e.currentTarget.querySelector('.modal-image').src = '';
  }
});