import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor() { }
  enquirydata={name:"",email:"",contact:"",username:""};

  sendenquiry(){
    console.log("Enqiry")
  }
  ngOnInit(): void {
  }

}
