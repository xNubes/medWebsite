import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent  {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
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

    if (this.message.hasError('required')) {
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

getErrorMessageMessage() {


  if (this.message.hasError('required')) {
    return 'Sie müssen eine Nachricht eingeben';
  }

  return this.message.hasError('text') ? 'Keine gültige Nachricht ' : '';
}

  constructor() {
    this.captcha ='';

  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response:' +this.captcha);
  }

  
  onSubmit() {
    this.emailService.sendEmail(this.name, this.email, this.subject, this.message).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }
}

