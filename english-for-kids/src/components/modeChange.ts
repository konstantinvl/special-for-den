import '../assets/styles/modeChange.scss';
import { newElem } from '../functions/createElem';
import { BaseComponent } from './base-component';

enum MODE {
  TRAIN = `TRAIN`,
  GAME = 'GAME',
}

export class ModeChange extends BaseComponent {
  mode: string;

  marker: HTMLElement;

  text: HTMLElement;

  constructor(rootelement: HTMLElement) {
    super('div', ['change-mode']);
    this.mode = MODE.TRAIN;
    this.marker = newElem('div', ['change-mode_marker']);
    this.text = newElem('span', ['change-mode_text'], `${this.mode}`);
    this.element.append(this.text, this.marker);
    rootelement.append(this.element);
    // this.element.onclick=()=>this.changeMode();
  }

  changeMode(mode?: string): string {
    if (this.mode === MODE.TRAIN) {
      this.mode = MODE.GAME;
      this.element.classList.add('game');
      this.text.innerHTML = this.mode;
    }
    if (this.mode === MODE.GAME) {
      this.mode = MODE.TRAIN;
      this.element.classList.remove('game');
      this.text.innerHTML = this.mode;
    }
    if (this.mode === 'OBSERVE') {
      this.mode = 'CHANGE';
      this.element.classList.add('game');
      this.text.innerHTML = this.mode;
    }
    if (this.mode === 'CHANGE') {
      this.mode = 'OBSERVE';
      this.element.classList.remove('game');
      this.text.innerHTML = this.mode;
    }

    return this.mode;
  }
}
