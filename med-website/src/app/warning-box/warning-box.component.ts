import { Component } from '@angular/core';
import { AlertModule } from '@coreui/angular';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent {

  public warningMessage = 'Falls Sie uns telefonisch nicht erreichen können, kontaktieren Sie uns bitte gerne auch per Email. Für Rezeptwünsche steht auch unser Rezepttelefon zur Verfügung.';


  // public changeMessage(): void {
  //   this.warningMessage = this.warningMessage.get('/assets/warning-message/nachricht.txt').subscribe(data => {
  //     console.log(data.text());
  //   });
  // }
}
