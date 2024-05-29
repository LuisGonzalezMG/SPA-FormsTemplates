import { Component } from '@angular/core';



@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  
  constructor(){}

  register: IRegisterForm= {
    name:"",
    apellido:"",
    correo:"",
    contrasena:"",
    repcontrasena:""
  }

  submit(){
    console.log("Datos de inicio de sesion");
    console.log(this.register.name);
    console.log(this.register.apellido);
    console.log(this.register.correo);
    console.log(this.register.contrasena);
    console.log(this.register.repcontrasena);
    if(this.register.contrasena !== this.register.repcontrasena){
      console.log("Las contraseñas no coinciden");
    }
    return;
  }
}


interface IRegisterForm{
  name: string;
  apellido: string;
  correo: string;
  contrasena: string;
  repcontrasena:string;
}