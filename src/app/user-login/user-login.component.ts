import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userName=""
  password=""

  readValues=()=>
  {
    let data:any={
      "userName":this.userName,
      "password":this.password
    }

    console.log(data)
    if (this.userName=="Food" && this.password=="12345") {
      alert("valid login")
    } else {
      alert("invalid credentials")
      
    }
  }

}
