// import icons from "url:../../../images/icons.svg ";

class AdviceView {
  _contentElement = document.querySelector(".advice-card__content");
  _button = document.querySelector(".advice-card__icon");

  addHandlerNewAdvice(handlerFunction) {
    this._button.addEventListener("click", handlerFunction);
  }

  renderAdvice(data) {
    const html = `
    <p class="advice-card__id-text">Advice #${data.id}</p>
    <blockquote class="advice-card__quote">
          "${data.advice}"
    </blockquote>
    `;

    this._clear();
    this._contentElement.insertAdjacentHTML("beforeend", html);
  }

  //   renderSpinner() {
  //     const html = `
  //     <div class="spinner">
  //          <svg>
  //           <use href="${icons}#icon-loader"></use>
  //          </svg>
  //       </div>
  // `;
  //     this._clear();
  //     this._contentElement.insertAdjacentHTML("beforeend", html);
  //   }

  _clear() {
    this._contentElement.innerHTML = "";
  }
}

export default new AdviceView();
