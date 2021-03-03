import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',

  template: `<div class="footer-container">
    <div class="col">
      <span>Social</span>
      <div class="row-links">
        <a id="face" href="https://www.facebook.com/" target="_blank"></a>
        <a id="twitter" href="https://twitter.com/" target="_blank"></a>
        <a id="insta" href="https://www.instagram.com/" target="_blank"></a>
      </div>
    </div>
    <div class="col">
      <span>Contacts</span>
      <div class="row">
        <div class="row-contacts">
          <div id="icon-mail"></div>
          <p>stockangelofficial@yahoo.com</p>
        </div>
        <div class="row-contacts">
          <div id="icon-phone"></div>
          <p>+3620 999 9999</p>
        </div>
      </div>
    </div>
    <div class="col">
      <span>Location</span>
      <div class="row">
        <div class="row-contacts">
          <div id="icon-map"></div>
          <p>Bp. 1113 XY str. 23</p>
        </div>
      </div>
    </div>
  </div> `,

  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
