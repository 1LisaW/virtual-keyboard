export default class KeyboardModel {
  constructor(lang, content, layout) {
    this.language = lang;
    this.content = content;
    this.currentCase = (char) => char.toLowerCase();
    this.metaKeys = {};
    this.layout = layout;
    this.currentValue = '';
    this.cursorPosition = 0;
    this.textareaText = '';
    this.changeLanguageCallbacks = [];
    this.changeMetaKeysCallbacks = [];
    this.changeCurrentValueCallbacks = [];
    this.changeButtonStyleOnCallbacks = [];
    this.changeButtonStyleOffCallbacks = [];
    this.changeContentCallbacks = [];
    this.changeTextAreaCallbacks = [];
    this.changeTextCase = [];
  }

  onChangeLanguage(callback) {
    this.changeLanguageCallbacks.push(callback);
  }

  onChangeCase(callback) {
    this.changeTextCase.push(callback);
  }

  onChangeContent(callback) {
    this.changeContentCallbacks.push(callback);
  }

  onChangeMetaKeys(callback) {
    this.changeMetaKeysCallbacks.push(callback);
  }

  onChangeCurrentValue(callback) {
    this.changeCurrentValueCallbacks.push(callback);
  }

  onTurnOnButtonStyle(callback) {
    this.changeButtonStyleOnCallbacks.push(callback);
  }

  onTurnOffButtonStyle(callback) {
    this.changeButtonStyleOffCallbacks.push(callback);
  }

  onChangeTextArea(callback) {
    this.changeTextAreaCallbacks.push(callback);
  }

  getLanguage() {
    return this.language;
  }

  getCase() {
    return this.currentCase;
  }

  getMetaKeys() {
    return this.metaKeys;
  }

  getLayout() {
    return this.layout;
  }

  getContent() {
    return this.content;
  }

  getCurrentNode(code) {
    return this.layout.find((element) => element.code === code);
  }

  getCurrentChar(code) {
    return this.getCurrentNode(code)[this.getContent()][this.getLanguage()];
  }

  getTextAreaValue() {
    return this.textareaText;
  }

  setTextAreaValue(value) {
    let currentChar;
    let indexForSubstring = this.cursorPosition;
    let indexForSecondSubstring = this.cursorPosition;
    switch (value) {
      case 'Enter': currentChar = '\n';
        break;
      case 'Tab': currentChar = '\t';
        break;
      case 'Backspace': currentChar = '';
        indexForSubstring -= 1;
        break;
      case 'Delete': currentChar = '';
        indexForSecondSubstring += 1;
        break;
      default: currentChar = this.currentCase(this.getCurrentChar(value));
    }
    this.textareaText = this.textareaText.slice(0, indexForSubstring)
      + currentChar
      + this.textareaText.slice(indexForSecondSubstring);
    this.setCursorPosition(value);
    this.changeTextAreaCallbacks.map((callback) => callback(value));
  }

  setLanguage(value) {
    const last = this.language;
    this.language = value;
    if (last === value) return;
    this.changeLanguageCallbacks.map((callback) => callback(value, last));
  }

  setCase(value) {
    const last = this.currentCase;
    this.currentCase = value;
    if (last === value) return;
    this.changeTextCase.map((callback) => callback(value));
  }

  setContent(value) {
    const last = this.language;
    this.content = value;
    if (last === value) return;
    this.changeContentCallbacks.map((callback) => callback(value, last));
  }

  setMetaKeys(value) {
    const last = this.metaKeys;
    this.metaKeys = value;
    if (Object.keys(this.metaKeys).every((key) => value[key] === this.metaKeys[key]));
    this.changeMetaKeysCallbacks.map((callback) => callback(value, last));
  }

  setCurrentValue(value) {
    const last = this.currentValue;
    this.currentValue = value;
    this.changeCurrentValueCallbacks.map((callback) => callback(value, last));
  }

  setCursorPosition(charCode, selectionStart = -1) {
    if (charCode === 'Backspace') {
      this.cursorPosition -= 1;
    } else if (charCode !== 'Delete') {
      this.cursorPosition += 1;
    }
    if (selectionStart > -1) this.cursorPosition = selectionStart;
    if (this.cursorPosition < 0) this.cursorPosition = 0;
  }

  onButtonDown(value) {
    const last = this.currentValue;
    this.currentValue = value;
    this.changeButtonStyleOnCallbacks.map((callback) => callback(value, last));
  }

  onButtonUp(value) {
    const last = this.currentValue;
    this.currentValue = value;
    this.changeButtonStyleOffCallbacks.map((callback) => callback(value, last));
  }
}
