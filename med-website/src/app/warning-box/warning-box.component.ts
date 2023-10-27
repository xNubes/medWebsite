import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent {

  public warningMessage = null;
  constructor(private http: HttpClient) {

  }
  displayBox () {
    var outerBox = document.getElementById("outer-box");

    if (this.warningMessage = null) {
      
      outerBox.style.display = "none";
    }
    else {
      outerBox.style.display = "block";
    }
  }

  ngOnInit() {
    this.http.get("\assets\warning-message\Nachricht.txt", {responseType: 'text'}).subscribe((warningMessage:string) => this.warningMessage = warningMessage)

  }
}
