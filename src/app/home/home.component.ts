import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { FormsModule ,FormControl,Validators} from '@angular/forms';
import cities from "../services/json/indiancities.json";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isActive = 1;  
  allcities=[]
  carbook ={   checkin:new Date(Date.now()).toLocaleDateString(),checkout:new Date(Date.now()).toLocaleDateString(),
    start:null,end:null,contact:null,
    email:null,child:0,adult:0,name:null}
  tour ={   checkin:new Date(Date.now()).toLocaleDateString(),checkout:new Date(Date.now()).toLocaleDateString(),
      start:null,end:null,contact:null,
      email:null,child:0,adult:0,name:null,package:'domestic'}
      cityfrom=[];cityto=[];
  citytype= {domestic:["Kodaikanal","Madurai", "Rameshwaram", "Kanyakumari","Mahabalipuram", "pondicheri","Alleppey","Thekkady",
                      "thiruvananthapuram","Hampi","Mysore","Coorgue","Tirupathi",   "Hydrabad","Goa","Andaman","Ladakh","Agra", "Delhi",
                      "Darjeeling","Kolkata","Pune","Manali","Shimla"],
            international:[{name:"Dubai"},{name:"Maldives"},{name:"Prague(Czech Republic)"},{name:"Thailand"},{name:"Singapore"},{name:
              "Budapest(Hungary)"},{name:"Bangkok"},{name:"Malaysia"}]}    
  submitbooking(){
    console.log(this.carbook);
  }
  packagefn(type){
    if(type == 'domestic'){
      this.cityto = cities;
    }else{
      this.cityto = this.citytype.international
    }

  }
  ngOnInit(): void {

    this.cityfrom  = cities;
    this.cityto = cities;
    console.log(this.allcities)
  }

}
