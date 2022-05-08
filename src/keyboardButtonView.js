import View from './view';

export default class KeyboardButtonView extends View {
  constructor(parent, options, className) {
    super(parent, 'div');
    const {
      charCode,
      actualChar,
      onKeyDown,
      onKeyUp,
      // onChangeChar,
    } = options;
    this.node.textContent = actualChar;
    this.node.classList.add('button');
    this.node.classList.add(className);
    this.node.onmousedown = () => {
      onKeyDown(charCode);
    };
    this.node.onmouseup = () => {
      onKeyUp(charCode);
    };
    this.node.onchange = (newValue) => {
      this.node.textContent = newValue;
    };
  }
}
