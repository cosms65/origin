let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =()=> {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +' ]').classList.add('active');

      });
    };
  });
}; 

 ScrollReveal({
   reset: true,
   distance:'80px',
   duration: 2000,
   delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-container, .upcoming-box,.contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });
/=======================/
const typed = new Typed('.multiple-text',{
  strings  :['Web Devloper','Python Developer','GPT-4 User'],
  typeSpeed: 100,
  backSpeed: 100,
  backSelay: 1000,
  loop: true
});
const typedText = new Typed('.Text',{
  strings  :['1.Instruction','2.Structure','3.Commands'],
  typeSpeed: 100,
  backSpeed: 100,
  backSelay: 1000,
  loop: true
});


