class AdviceView {
  _contentElement = document.querySelector(".advice-card__content");
  _button = document.querySelector(".advice-card__icon");

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

  _clear() {
    this._contentElement.innerHTML = "";
  }
}

export default new AdviceView();
