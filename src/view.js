export default class View {
  constructor(parent, tagName) {
    const element = document.createElement(tagName);
    parent.append(element);
    this.node = element;
  }

  destroy() {
    this.node.remove();
  }
}
