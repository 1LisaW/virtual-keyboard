import View from './view';
import KeyboardButtonView from './keyboardButtonView';

export default class KeyboardView extends View {
  constructor(parent, model, controller) {
    super(parent, 'div');
    this.node.classList.add('keyboard-wrapper');
    this.model = model;
    this.controller = controller;
    this.buttons = {};
    this.render();
    this.model.onChangeLanguage(() => {
      this.updateButtonsText();
    });
    this.model.onChangeContent(() => {
      this.updateButtonsText();
    });
    this.model.onChangeCase(() => {
      this.updateButtonsText();
    });
    this.model.onChangeTextArea((charCode) => {
      this.model.getCurrentChar(charCode);
    });
    this.model.onTurnOnButtonStyle((current) => {
      this.toggleOnButton(current);
    });
    this.model.onTurnOffButtonStyle((current) => {
      this.toggleOffButton(current);
    });
  }

  handleKeyDown(charCode) {
    this.controller.keyDown(charCode);
  }

  handleKeyUp(charCode) {
    this.controller.keyUp(charCode);
  }

  handleChangeChar(charCode) {
    this.controller.keyUp(charCode);
  }

  render() {
    this.model.getLayout().forEach(
      (button) => {
        this.buttons[button.code] = new KeyboardButtonView(this.node, {
          charCode: button.code,
          actualChar: button.content.ru,
          onKeyDown: (charCode) => this.handleKeyDown(charCode),
          onKeyUp: (charCode) => this.handleKeyUp(charCode),
        }, button.size);
      },
    );
    document.onkeydown = (event) => {
      event.preventDefault();
      console.log(event.repeat);
      if (this.model.getMetaKeys()[event.code] !== undefined && event.repeat) {
        return;
      }
      this.handleKeyDown(event.code);
    };
    document.onkeyup = (event) => this.handleKeyUp(event.code);
  }

  toggleOnButton(current) {
    this.buttons[current].node.classList.add('active');
  }

  toggleOffButton(current) {
    if (this.model.getCurrentNode(current).type !== 'meta') {
      this.buttons[current].node.classList.remove('active');
    }

    Object.entries(this.model.getMetaKeys()).forEach(([metaKey, metaValue]) => {
      if (metaValue !== true) {
        this.buttons[metaKey].node.classList.remove('active');
      }
    });
  }

  updateButtonsText() {
    Object.entries(this.buttons).forEach(([key, value]) => {
      let newVal = this.model.getCurrentChar(key);
      if (this.model.getCurrentNode(key).type === 'letter') {
        newVal = this.model.getCase()(newVal);
      }
      value.node.onchange(newVal);
    });
  }
}
