import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../email.service';

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


  
  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    message:'',
    subject:'',
    email:'',
    reciever:''
  };


  onSubmit(){
    this.http.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
        res => {
          this.dataset = res;
          console.log(this.dataset);
          alert('Email Sent successfully');
          this.dataset.email = '';
          this.dataset.name = '';
          this.dataset.subject = '';
          this.dataset.message = '';
          this.dataset.reciever = '';
        });
      this.updateValueAndValidity();
      if (this.form.invalid) {
        this.form.markAllAsTouched();
      }
      else {
        window.location.reload();
      }

  }

  updateValueAndValidity() {
    for (let controlName in this.form.controls) {
      this.form.controls[controlName].updateValueAndValidity;
    }
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
  reciever:string;
}
