import { Component, OnInit } from '@angular/core';

import 'vanilla-tilt';
declare var VanillaTilt:any;

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss']
})
export class LoginUIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    VanillaTilt.init(document.querySelector(".tilt-card"), { max: 25, speed: 400, glare:true, "max-glare":1});
    VanillaTilt.init(document.querySelectorAll(".tilt-card"));

  }

}
