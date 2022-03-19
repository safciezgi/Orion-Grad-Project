import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  isLogin!:boolean;

  ngOnInit(): void {
    this.userService.isLogin.subscribe(res =>{
      this.isLogin = res;
    })
  }

  logout(){
    this.userService.isLogin.next(false);
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
