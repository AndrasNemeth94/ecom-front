import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'StockAngel';
  display = false;
  getCloseDrawer(closeIt: boolean) {
    closeIt ? (this.display = false) : (this.display = this.display);
  }
  getDisplayStatus(displayMenu: boolean) {
    displayMenu ? (this.display = true) : (this.display = false);
  }
}
