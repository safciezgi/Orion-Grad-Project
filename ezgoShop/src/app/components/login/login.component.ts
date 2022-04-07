import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private Users!: User[];

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.userService.getUser().subscribe(res => {
      this.Users = res;
      console.log(this.Users)
    })


  }


  login() {

    if(this.loginForm.valid){
      const currentUser = this.Users.find((user:User)=>{
        return user.username === this.loginForm.value.username && user.password === this.loginForm.value.password
      });
      if(currentUser){
        this.loginForm.reset();
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        this.userService.isLogin.next(true);
        this.userService.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        alert('Login Successful!');
        this.router.navigate(['welcomePage'])
      }else{
        alert('User not found!');
      }
    }


  }
}



