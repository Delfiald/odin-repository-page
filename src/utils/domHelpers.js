export const content = (() => {
  return {
    createElement: (tag, className, content) => {
      const element = document.createElement(tag);
      if(className) {
        for(let name of className){
          element.classList.add(name);
        }
      }
      if(content) element.textContent = content;

      return element;
    }
  }
})()

export const append = (() => {
  return {
    element: (parent, ...children) => {
      children.forEach(child => {
        parent.appendChild(child);
      })
    }
  }
})()