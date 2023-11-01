import { Component } from '@angular/core';

@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.scss']
})
export class PageLocationComponent {
  
  enlargeImage(myModal){
    var modal = document.getElementById(myModal);
    console.log (modal);
    modal.style.display = "block";
  }
  
  exitImage(myModal) {
    var modal = document.getElementById(myModal);
  
    modal.style.display = "none";
  }

}



