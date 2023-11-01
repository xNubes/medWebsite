import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, subject: string, message: string) {
    const emailData = {
      name: name,
      reciever: "robin@juenemanns.de",
      email: email,
      subject: subject,
      message: message
    };
    return this.http.post(this.emailUrl, emailData);
  }

}
