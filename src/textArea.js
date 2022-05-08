import View from './view';

export default class TextAreaView extends View {
  constructor(parent, model, controller) {
    super(parent, 'div');
    this.model = model;
    this.controller = controller;
    this.textArea = new View(this.node, 'textarea');
    this.model.onChangeTextArea((current) => {
      this.update(current);
    });
    this.textArea.node.onclick = () => {
      this.controller.onClickTextarea(this.textArea.node.selectionStart);
    };
    this.textArea.node.classList.add('textarea-wrapper');
    this.update();
  }

  update() {
    this.textArea.node.value = this.model.textareaText;
    this.textArea.node.focus();
    this.textArea.node.selectionStart = this.model.cursorPosition;
    this.textArea.node.selectionEnd = this.model.cursorPosition;
  }
}
