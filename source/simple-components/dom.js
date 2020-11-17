export default (text = "Hello🎉🎉🎉") => {
  const element = document.createElement("div");
  element.innerHTML = text;

  return element;
};
