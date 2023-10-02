import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  text = new FormControl('', [Validators.required]);
  captcha: string;

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Sie müssen einen Namen eingeben';
    }

    if (this.email.hasError('required')) {
      return 'Sie müssen eine E-Mail eingeben';
    }

    if (this.subject.hasError('required')) {
      return 'Sie müssen einen Betreff eingeben';
    }

    if (this.text.hasError('required')) {
      return 'Sie müssen eine Nachricht eingeben';
    }

    return this.email.hasError('email') ? 'Keine gültige E-Mail ' : '';
  }

  getErrorMessageEmail() {


    if (this.email.hasError('required')) {
      return 'Sie müssen eine E-Mail eingeben';
    }

    return this.email.hasError('email') ? 'Keine gültige E-Mail ' : '';
  }

  getErrorMessageSubject() {

    if (this.subject.hasError('required')) {
      return 'Sie müssen einen Betreff eingeben';
    }

    return this.subject.hasError('subject') ? 'Kein gültiger Betreff ' : '';
}

getErrorMessageText() {


  if (this.text.hasError('required')) {
    return 'Sie müssen eine Nachricht eingeben';
  }

  return this.text.hasError('text') ? 'Keine gültige Nachricht ' : '';
}

  constructor() {
    this.captcha ='';

  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response:' +this.captcha);
  }
}
