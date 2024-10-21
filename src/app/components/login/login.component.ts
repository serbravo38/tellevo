import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  email:string ="";
  password:string = "";

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {}
  async login (){
    try{
      await this.authService.login(this.email,this.password);
      alert("logueado exitosamente");
      this.router.navigate(["/inicio"])
    }catch(error){alert("error al intentar loguearse: "+error)}
  }///fin del login

  async register (){
    try{
      this.authService.register(this.email,this.password);
      alert("registrado exitosamente");
    }catch(error){alert("error al intentar registrar : "+error)}
  }
}///fin del register
