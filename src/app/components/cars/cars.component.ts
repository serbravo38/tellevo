import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from 'src/app/services/cars.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car = {marca:"",modelo:"",year:0, imageUrl:"", patente:""}
  constructor(
    private carService:CarsService,
    private aService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {}

  addCar(){
    this.carService.addCar(this.car) .then(()=>{
      alert("Vehiculo agregado!")
      this.car = {marca:"",modelo:"",year:0, imageUrl:"", patente:""}
    }).catch(error=>{alert("error al agregar"+error)})
  }
  logout(){
    this.aService.logout();
    alert("sesion finalizada")
    this.router.navigate(["/portada"]);
  }
}
