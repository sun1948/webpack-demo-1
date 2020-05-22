import x from "./x.js";

const div = document.getElementById("app1");

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
