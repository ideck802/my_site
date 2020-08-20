//for anticlockwise
const rotatorsBackwards = document.querySelectorAll('.rotating_obj_back');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate-back');
    } else {
      entry.target.classList.remove('rotate-back');
    }
  });
}, { threshold: [0.7] });

rotatorsBackwards.forEach(rotator => {
  observer.observe(rotator);
});

//const rotatorsBackwards2 = document.querySelectorAll('.rotating_title_back');

//var observer2 = new IntersectionObserver(function(entries) {
//  entries.forEach(entry => {
//    if (entry.isIntersecting === true) {
//      entry.target.classList.add('rotate-back_title');
//    } else {
//      entry.target.classList.remove('rotate-back_title');
//    }
//  });
//}, { threshold: [0.8], rootMargin: ['1px 1px 1px 1px'] });

//rotatorsBackwards2.forEach(rotator => {
//  observer2.observe(rotator);
//});
