const poageLoader = document.getElementById("pageLoader");


export const exchangeClass = (element: Element, firstClass:string, secondClass:string) => {
    if(element.classList.contains(firstClass)){
      element.classList.replace(firstClass, secondClass);
    } else{
      element.classList.replace(secondClass, firstClass);
    }
  };
  
export const pageLoader = {
  stop: () => {
    poageLoader.classList.add("hidden");
  },

  start: () => {
    poageLoader.classList.remove("hidden");
  },
};