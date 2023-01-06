import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBarcode } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  linkedin=faLinkedin;
  github=faGithub;
  code=faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
