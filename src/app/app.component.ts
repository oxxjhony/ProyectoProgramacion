import { Component } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fgValidation:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.fgValidationBuilder();

  }

  fgValidationBuilder(){
    this.fgValidation=this.fb.group({
      firstName:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      lastName:['',[Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      Email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.minLength(3)]]
    });
  }
  /*title = 'like this';
  name = 'jhony ';
  age ='20';
  ngOnInit(){
    /*setTimeout(()=>{
      this.age='23';
    },4000);*/
 
  /* firstName: string=null;
   lastName: string=null;
   Email: string=null;
   address: string=null;*/

 
 peopleList=[];  

   get peopleAmount(){
     return this.peopleList.length;
   }

   savePersonData(){
     if(this.fgValidation.invalid){
       alert("error");
     }
     else{
      this.peopleList.push({firstName:this.fgValidation.controls.firstName.value,lastName:this.fgValidation.controls.lastName.value,Email:this.fgValidation.controls.Email.value,address:this.fgValidation.controls.address.value});
      
     }

    
     

   /* this.peopleList.forEach(p=>{
      this.peopleList.forEach(d=>{
        if(p.Email==d.Email){
          let f=true;
          f=false;}
        });
      });
      if(!f){
         this.peopleList.push({firstName:this.firstName,lastName:this.lastName,Email:this.Email,address:this.address});
         this.reset();

      }
      else{
        alert("alguien esta usando este email");
      }
      */
      

    }

    savePersonData1(){
      this.savePersonData();
      }
 
     //this.peopleList.push({firstName:this.firstName,lastName:this.lastName,Email:this.Email,address:this.address});
    //this.reset();
   

   modificarData(p){
     this.onSelect(p);
     this.onDelete(p.email);
     
   }

   

   onSelect(p){
    this.fgValidation.controls.firstName=p.firstName;
    this.fgValidation.controls.lastName=p.lastName;
    this.fgValidation.controls.Email=p.Email
    this.fgValidation.controls.address=p.address;

   }

   onDelete(email){
    //let aux=[];
    this.peopleList=this.peopleList.filter(p=>p.Email != email);
    /*let aux=[];
    this.peopleList.forEach(p=>{
      if(p.Email!=Email){
        aux.push();
      }

    });
    this.peopleList=aux;*/
    //this.peopleList=aux;

   }

  

   reset(){
    this.fgValidation.controls.firstName=null,
    this.fgValidation.controls.lastName=null,
    this.fgValidation.controls.Email=null,
    this.fgValidation.controls.address=null

   }
  
  

}

