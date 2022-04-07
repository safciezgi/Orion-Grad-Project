import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ezgoShop';
  // isHidden!: boolean;
  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.checkUser();
    console.log(this.userService.isLogin);


  }
    checkUser(){
    if (localStorage.length > 0) {
      this.userService.isLogin.next(true);
      // this.isHidden = false;


    }else{
      this.userService.isLogin.next(false);
      // this.isHidden = true;

    }
  }

}
