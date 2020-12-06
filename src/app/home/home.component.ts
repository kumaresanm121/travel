import { Component, OnInit } from '@angular/core';
import { FormsModule ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  carbook ={   checkin:new Date(Date.now()).toLocaleDateString(),checkout:new Date(Date.now()).toLocaleDateString(),
    start:null,end:null,contact:null,
    email:null,child:0,adult:0,name:null,package:String}
  isActive = 1;  
  submitbooking(){
    console.log(this.carbook);
  }

  ngOnInit(): void {

    
  }

}
