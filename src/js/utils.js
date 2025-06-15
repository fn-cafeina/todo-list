const errorMsg = (msg) => {
  alert(msg);
};

const cleanCtn = (ctn) => {
  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild);
  }
};

const $ = (el) => {
  return document.querySelector(el);
};

const createElement = (element) => {
  const { tagName, text, classes, id } = element;

  const newElement = document.createElement(tagName);

  if (id) {
    newElement.id = id;
  }

  if (classes) {
    newElement.classList.add(...classes);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

createElement({ tagName: "div" });

export { errorMsg, cleanCtn, $, createElement };
