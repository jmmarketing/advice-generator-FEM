import adviceView from "./views/adviceView.js";
import * as model from "./model.js";

console.log("JS FILE LOADED!");

const controlAdvice = async function () {
  adviceView.renderSpinner();
  await model.getAdvice();

  adviceView.renderAdvice(model.advice);
};

const init = function () {
  document.onload = controlAdvice();
  adviceView.addHandlerNewAdvice(controlAdvice);
};

init();
