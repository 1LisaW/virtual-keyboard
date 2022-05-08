export default class KeyboardController {
  constructor(model) {
    this.model = model;
    this.caseUp = (result) => result.toUpperCase();
    this.caseDown = (result) => result.toLowerCase();
  }

  keyDown(charCode) {
    const currentButton = this.model.getLayout().find((button) => button.code === charCode);
    if (!currentButton) return;
    if (currentButton.type === 'meta') {
      this.model.setMetaKeys({
        ...this.model.getMetaKeys(),
        [charCode]: !this.model.getMetaKeys()[charCode],
      });
      if (this.model.getMetaKeys().ShiftLeft && this.model.getMetaKeys().ControlLeft) {
        const language = this.model.getLanguage() === 'ru' ? 'eng' : 'ru';
        this.model.setLanguage(language);
        this.model.setMetaKeys({
          ...this.model.getMetaKeys(),
          ShiftLeft: false,
          ControlLeft: false,
        });
        this.model.setContent('content');
      } else if (charCode === 'ShiftLeft' || charCode === 'ShiftRight') {
        if (this.model.getContent() !== 'alt') {
          this.model.setContent('alt');
        }
      }
      if (
        ((this.model.getMetaKeys().ShiftLeft || this.model.getMetaKeys().ShiftRight)
      && !this.model.getMetaKeys().CapsLock)
      || ((!this.model.getMetaKeys().ShiftLeft && !this.model.getMetaKeys().ShiftRight)
      && this.model.getMetaKeys().CapsLock)) {
        this.model.setCase(this.caseUp);
      } else {
        this.model.setCase(this.caseDown);
      }
    } else {
      this.model.setTextAreaValue(charCode);
    }
    this.model.onButtonDown(charCode);
  }

  keyUp(charCode) {
    const currentButton = this.model.getLayout().find((button) => button.code === charCode);
    if (!currentButton) return;
    if (charCode !== 'CapsLock' && currentButton.type === 'meta') {
      this.model.setMetaKeys({ ...this.model.getMetaKeys(), [charCode]: false });
    }
    if (charCode === 'ShiftLeft' || charCode === 'ShiftRight') {
      this.model.setContent('content');
      if (!this.model.getMetaKeys().CapsLock) {
        this.model.setCase(this.caseDown);
      } else {
        this.model.setCase(this.caseUp);
      }
    }
    this.model.onButtonUp(charCode);
  }

  onClickTextarea(selectionStart) {
    this.model.setCursorPosition('', selectionStart);
  }
}
