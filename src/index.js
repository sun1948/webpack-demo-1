import x from "./x.js";
import png from "./assets/1.png";

const div = document.getElementById("app1");
div.innerHTML = `
    <img src='${png}'>
`;

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = function () {
  const promise = import("./lazy");
  promise.then(
    (Module) => {
      Module.default();
    },
    () => {
      console.log("懒加载失败");
    }
  );
};
div.appendChild(button);
