import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent implements OnInit {

  public warningMessage = '';

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get("/assets/warning-message/Nachricht.txt", { responseType: 'text' }).subscribe((warningMessage: string) => {
      this.warningMessage = warningMessage;
      // this.displayBox(); // Call the displayBox function when the data is loaded.
    });
  }
  
  // displayBox () {
  //   const outerBox = document.getElementById("outer-box");

  //   if (this.warningMessage === 'a') {
      
  //     outerBox.style.display = "none";
  //   }
  //   else {
  //     outerBox.style.display = "block";
  //   }
  // }
}
