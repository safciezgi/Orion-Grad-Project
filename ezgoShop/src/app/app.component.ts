import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ezgoShop';

  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.checkUser();
  }
    checkUser(){
    if (localStorage.length > 0) {
      this.userService.isLogin.next(true);
    }else{
      this.userService.isLogin.next(false);
    }
  }

}
