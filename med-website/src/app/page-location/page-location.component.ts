import { Component } from '@angular/core';

@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.scss']
})
export class PageLocationComponent {
  
  enlargeImage(myModal, myImg, myCaption){
    var modal = document.getElementById(myModal);
    var modalImg = document.getElementById(myImg);
    var captionText = document.getElementById(myCaption);
  
    modal.style.display = "block";
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
  }
  
  exitImage(myModal) {
    var modal = document.getElementById(myModal);
  
    modal.style.display = "none";
  }

}



