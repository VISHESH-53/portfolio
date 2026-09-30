document.querySelectorAll('.skill-item').forEach(el=>el.addEventListener('mouseenter',()=>document.querySelector('.skill-core').style.transform='scale(1.12)'));
document.querySelectorAll('.skill-item').forEach(el=>el.addEventListener('mouseleave',()=>document.querySelector('.skill-core').style.transform='scale(1)'));
