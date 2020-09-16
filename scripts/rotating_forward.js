//for clockwise
const rotators = document.querySelectorAll('.rotating_obj');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate-forward');
    } else {
      entry.target.classList.remove('rotate-forward');
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
      entry.target.classList.add('rotate-forward_title');
    } else {
      entry.target.classList.remove('rotate-forward_title');
    }
  });
}, { threshold: [1] });

rotators2.forEach(rotator => {
  observer2.observe(rotator);
});

const rotators3 = document.querySelectorAll('.rotating_title');

var observer3 = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting === true) {
      entry.target.classList.add('rotate-forward_title');
    } else {
      entry.target.classList.remove('rotate-forward_title');
    }
  });
}, { threshold: [0.8], rootMargin: ['-80px 1px 1px 1px'] });

rotators3.forEach(rotator => {
  observer3.observe(rotator);
});
