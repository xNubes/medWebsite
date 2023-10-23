import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent {

  public warningMessage = '';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("\assets\warning-message\Nachricht.txt", {responseType: 'text'}).subscribe((warningMessage:string) => this.warningMessage = warningMessage)
  }
}
