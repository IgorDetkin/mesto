// class Section {
//   constructor({items, renderer}, containerSelector) {
//     this._renderedItems = items;
//     this._renderer = renderer;
//     this._container = document.querySelector(containerSelector);
//   }


//   //перебор и отрисовка элементов
//   renderItems() {
//     this._renderedItems.forEach((data) => {
//       this._renderer(data);
//     })
//   }

//   // добавление в ДОМ
//   setItem (element) {
//   this._container.prepend(element);
//   }
// }

// export {Section};


class Section {
  constructor({renderer}, containerSelector) {
    // this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }


  //перебор и отрисовка элементов
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    })
  }

  // добавление в ДОМ
  setItem (element) {
  this._container.prepend(element);
  }


  setItemServer (element) {
    this._container.append(element);
    }
  }

export {Section};
