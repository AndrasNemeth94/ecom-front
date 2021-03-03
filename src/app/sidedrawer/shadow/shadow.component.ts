import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css'],
})
export class ShadowComponent implements OnInit {
  @Output() closeSidedrawer = new EventEmitter<boolean>();
  closeIt = true;
  constructor() {}

  closeDrawer() {
    this.closeSidedrawer.emit(this.closeIt);
  }

  ngOnInit(): void {}
}
