import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';

@Component({
  selector: 'app-nav',
  template: `<nav class="nav-container">
    <a routerLink="/home" class="home-link"></a>

    <div class="collapse-menu">
      <button class="hamburger-menu" (click)="openSidebar()"></button>
      <a class="links" routerLink="/about">About</a>
      <div id="dropdown-container" class="links">
        <button class="links" id="drop-btn">Categories</button>
        <div class="dropdown-content">
          <li><a class="categ-item" routerLink="/shoes">shoes</a></li>
          <li><a class="categ-item" routerLink="/tshirts">tshirts</a></li>
          <li><a class="categ-item" routerLink="/sweaters">sweaters</a></li>
        </div>
      </div>
      <a class="links" routerLink="/cart">Cart</a>
      <a class="links" *ngIf="!_login.loggedIn()" routerLink="/login">Log in</a>
      <a class="links" *ngIf="_login.loggedIn()" routerLink="/profile"
        >Profile</a
      >
    </div>
  </nav>`,
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  displayMenu = false;
  @Output() displayStatus = new EventEmitter<boolean>();
  constructor(public _login: LoginserviceService) {}
  openSidebar() {
    this.displayMenu = true;
    this.displayStatus.emit(this.displayMenu);
  }
  ngOnInit(): void {}
}
