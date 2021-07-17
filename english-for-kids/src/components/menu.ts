import { newElem } from '../functions/createElem';
import { BaseComponent } from './base-component';
import '../assets/styles/menu.scss';

export class Menu extends BaseComponent {
  burger: HTMLElement;

  open: HTMLElement;

  wrapper: HTMLElement;

  login: HTMLElement;

  status: string;

  loginForm: HTMLFormElement;

  formLoginInput: HTMLInputElement;

  formPassInput: HTMLInputElement;

  submitBtn: HTMLButtonElement;

  constructor(rootelement: HTMLElement) {
    super('section', ['menu']);
    this.burger = newElem('div', ['menu_burger']);
    this.open = newElem('div', ['menu_open', 'closed']);
    this.wrapper = newElem('div', ['menu_open-wrapper']);
    this.login = newElem('div', ['login']);
    this.open.append(this.wrapper);
    this.element.append(this.burger, this.open);
    rootelement.append(this.element);
    this.status = 'closed';
    this.login = newElem('div', ['login', 'menu_button'], `Login`);

    this.loginForm = <HTMLFormElement>newElem('form', ['closed-login']);
    this.formLoginInput = <HTMLInputElement>newElem('input', ['login-input']);
    this.formPassInput = <HTMLInputElement>newElem('input', ['pass-input']);
    this.submitBtn = <HTMLButtonElement>newElem('button', ['submit-btn'], 'Submit');
    this.loginForm.append(this.formLoginInput, this.formPassInput, this.submitBtn);
    this.submitBtn.type = 'button';
    // this.login.append(this.loginForm);
    this.login.onclick = () => {
      this.loginForm.classList.toggle('closed-login');
    };
    // this.loginForm.onclick=()=>this.formSubmit();
  }

  formSubmitCheck() {
    console.log(1);
    if (this.formLoginInput.value && this.formPassInput.value) {
      console.log(new FormData(this.loginForm));
      return true;
    }
    return false;
  }
}
