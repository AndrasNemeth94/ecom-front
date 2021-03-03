import { Component, OnInit, Input } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-sidedrawer',
  templateUrl: './sidedrawer.component.html',
  styleUrls: ['./sidedrawer.component.css'],
})
export class SidedrawerComponent implements OnInit {
  display = false;
  constructor(public _login: LoginserviceService) {}
  showButton() {
    this.display = !this.display;
  }
  ngOnInit(): void {}
}
