function createIntersectionObserver(className) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  });
}

function observeElements(selector, observer) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => observer.observe(el));
}

const observer1 = createIntersectionObserver('show');
observeElements('.hidden', observer1);

const observer2 = createIntersectionObserver('show2');
observeElements('.hidden2', observer2);

const observer3 = createIntersectionObserver('show3');
observeElements('.hidden3', observer3);

const observer5 = createIntersectionObserver('show5');
observeElements('.hidden5', observer5);

