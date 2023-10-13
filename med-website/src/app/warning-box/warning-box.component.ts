import { Component } from '@angular/core';
import { AlertModule } from '@coreui/angular';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent {

  public warningMessage = 'Aktuelles';


  // public changeMessage(): void {
  //   this.warningMessage = this.warningMessage.get('/assets/warning-message/nachricht.txt').subscribe(data => {
  //     console.log(data.text());
  //   });
  // }
}
