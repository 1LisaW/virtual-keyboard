/* eslint-disable no-unused-vars */
import './style.scss';
import TextAreaView from './textArea';
import KeyboardModel from './keyboardModel';
import KeyboardController from './keyboardController';
import KeyboardView from './keyboardView';
import layout from './keyboard.json';
import View from './view';

function createKeyboard() {
  const model = new KeyboardModel('ru', 'content', layout);
  const controller = new KeyboardController(model);
  const textareaView = new TextAreaView(document.body, model, controller);
  const view = new KeyboardView(document.body, model, controller);
  const info = new View(document.body, 'div');
  info.node.classList.add('info');
  info.node.textContent = `Клавиатура создана в операционной системе Windows
  Для переключения языка комбинация: left (ctrl + shift) `;
}

createKeyboard();
