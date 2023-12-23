import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})


export class ContactFormComponent  {
  tempKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  siteKey = "6Leuj1koAAAAALkrG14WznMjvzECBqY1P4gTxAFA";

  allSet = false;
  nameSet = false;
  emailSet = false;
  subjectSet = false;
  messageSet = false;
  captcha: string;

  readonly form: FormGroup;
  
  public constructor(private http: HttpClient) {
    this.form = new FormGroup (
      {
        nameControl: new FormControl('', [Validators.required]),
        emailControl: new FormControl('', [Validators.required, Validators.email]),
        subjectControl: new FormControl('', [Validators.required]),
        messageControl: new FormControl('', [Validators.required])
      }
    );
  }

  onSubmit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const dataset: Details = {
      name: this.form.value.nameControl,
      message: this.form.value.messageControl,
      subject: this.form.value.subjectControl,
      email: this.form.value.emailControl,
      receiver: 'robin@juenemanns.de'
    }
    this.http.post<Details>('/api/mail-sender/send-mail', dataset).subscribe(
        res => {
          console.log('E-Mail sending succeeded', res);
          alert('E-Mail wurde versendet');
          this.form.reset();
        },err => {
          console.error('Email sending failed', err);
          alert('Probleme beim versenden der E-Mail');
        });

  }


resolved(captchaResponse: string) {
  this.captcha = captchaResponse;
  this.allSet = true;
  console.log('resolved captcha with response:' +this.captcha);

}

}

interface Details{
  name:string;
  subject:string;
  message:string;
  email:string;
  receiver:string;
}
