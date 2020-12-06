import { Component, OnInit } from '@angular/core';
import { FormsModule ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  carbook ={   checkin:new Date(Date.now()).toLocaleString('en-US'),checkout:new Date(Date.now()).toLocaleString('en-US'),
    start:String,end:String,duration:1,contact:String,
    email:String,members:2,child:Number,adult:Number,name:String,package:String}
  submitbooking(){
    console.log(this.carbook);
  }

  ngOnInit(): void {

    
  }

}
