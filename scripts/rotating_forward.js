//for clockwise
const rotators = document.querySelectorAll('.rotating_obj');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate_forward');
    } else {
      entry.target.classList.remove('rotate_forward');
    }
  });
}, { threshold: [0.7] });
rotators.forEach(rotator => {
  observer.observe(rotator);
});

const rotators2 = document.querySelectorAll('.rotating_title2');
var observer2 = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate_forward_title');
    } else {
      entry.target.classList.remove('rotate_forward_title');
    }
  });
}, { threshold: [1] });
rotators2.forEach(rotator => {
  observer2.observe(rotator);
});

const rotators4 = document.querySelectorAll('.rotating_title3');
var observer4 = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate_forward_title');
    } else {
      entry.target.classList.remove('rotate_forward_title');
    }
  });
}, { threshold: [0.3] });
rotators4.forEach(rotator => {
  observer4.observe(rotator);
});

const rotators3 = document.querySelectorAll('.rotating_title');

var observer3 = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate_forward_title');
    } else {
      entry.target.classList.remove('rotate_forward_title');
    }
  });
}, { threshold: [0.8], rootMargin: ['-80px 1px 1px 1px'] });

rotators3.forEach(rotator => {
  observer3.observe(rotator);
});
