import { Component } from '@angular/core';

@Component({
  selector: 'app-page-location',
  templateUrl: './page-location.component.html',
  styleUrls: ['./page-location.component.scss']
})
export class PageLocationComponent {
  isImageEnlarged: { [key: string]: boolean } = {};
  constructor() {
    this.initializeImageState('image1');
    this.initializeImageState('image2');
    this.initializeImageState('image3');
  }
  
  initializeImageState(imageName: string) {
    this.isImageEnlarged[imageName] = false;
  }

  toggleImage (imageName: string) {
    this.isImageEnlarged[imageName] = !this.isImageEnlarged[imageName];

  }

  enlargeImage(myModal){
    var modal = document.getElementById(myModal);
    modal.style.display = "block";
  }
  
  exitImage(myModal) {
    var modal = document.getElementById(myModal);
  
    modal.style.display = "none";
  }

}



