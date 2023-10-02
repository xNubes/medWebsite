import { Component } from '@angular/core';
import { ADVERTISEMENTCARDS, AdvertismentCard } from './advertisement-cards';

@Component({
  selector: 'app-picture-switch',
  templateUrl: './picture-switch.component.html',
  styleUrls: ['./picture-switch.component.scss']

  
})
export class PictureSwitchComponent {

  advertisementCard : AdvertismentCard;

  constructor() {
    this.advertisementCard = ADVERTISEMENTCARDS[0];
  }

  public changeAdvertisement(index:number): void {
    this.advertisementCard = ADVERTISEMENTCARDS[index];

    
  }

  // public colorSwitch() {
  //     if(changeAdvertisement = (1)) {

  //     }
  // }

}
