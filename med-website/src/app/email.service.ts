import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, subject: string, message: string) {
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    return this.http.post(this.emailUrl, data);
  }

}
