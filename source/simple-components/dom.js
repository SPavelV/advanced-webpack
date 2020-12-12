export default (text = "Hello!!!🎉🎉🎉") => {
  const element = document.createElement("div");

  element.addEventListener("click", async () => {
    element.innerHTML = "Динамическая загрузка⏲...";
    const result = await import(
      /* webpackChunkName: "lazyLoadedText" */ "./lazyLoadedText"
    );

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve;
      }, 2000)
    );

    element.innerHTML = result.default;
  });

  element.innerHTML = text;

  return element;
};
