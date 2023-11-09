import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
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

  nameSet = false;
  emailSet = false;
  subjectSet = false;
  messageSet = false;
  captchaSet = false;
  allSet = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  captcha: string;
  
  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    message:'',
    subject:'',
    email:''
  };


  onSubmit(){
    // this.http.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
    //     res => {
    //       this.dataset = res;
    //       console.log(this.dataset);
    //       alert('Email Sent successfully');
    //       this.dataset.email = '';
    //       this.dataset.name = '';
    //       this.dataset.subject = '';
    //       this.dataset.message = '';
    //     });
    window.location.reload();
  }
  
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Sie müssen einen Namen eingeben';
    }
    else if (this.email.hasError('email')) {
      return 'Keine gültige E-Mail ';
    }

    return this.nameSet = true;
  }

  getErrorMessageEmail() {


    if (this.email.hasError('required')) {
      return 'Sie müssen eine E-Mail eingeben';
    }
    else if (this.email.hasError('email')) {
      return 'Keine gültige E-Mail';
    }
    return this.emailSet = true;
  }

  getErrorMessageSubject() {

    if (this.subject.hasError('required')) {
      return 'Sie müssen einen Betreff eingeben';
    }

    return this.subjectSet = true;
}

getErrorMessageMessage() {


  if (this.message.hasError('required')) {
    return 'Sie müssen eine Nachricht eingeben';
  }

  return this.messageSet = true;
}


resolved(captchaResponse: string) {
  this.captcha = captchaResponse;
  this.allSet = true;
  console.log('resolved captcha with response:' +this.captcha);

}

// sendCheck () {

//   if (this.captchaSet) {
//     if (this.nameSet) {
//       if (this.emailSet) {
//         if (this.subjectSet) {
//           if (this.messageSet) {
//             this.allSet = true;
//           }
//         }
//       }
//     }
//   }
// }

}
interface Details{
  name:string;
  subject:string;
  message:string;
  email:string;
}
