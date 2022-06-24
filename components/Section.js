class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }


  //перебор и отрисовка элементов
  renderItems() {
    this._renderedItems.forEach((data) => {
      this._renderer(data);
    })
  }

  // добавление в ДОМ
  setItem (element) {
  this._container.append(element);
  }
}

export {Section};
