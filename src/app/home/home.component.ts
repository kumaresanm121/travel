import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { FormsModule ,FormControl,Validators} from '@angular/forms';
import cities from "../services/json/indiancities.json";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  
  constructor() { }
  isActive = 1;  
  allcities=[]
  bookingInfo ={   checkin:new Date(Date.now()).toLocaleDateString(),checkout:new Date(Date.now()).toLocaleDateString(),
    start:null,end:null,contact:null,
    email:null,child:0,adult:0,name:null,package:null,mode:null}
  /* tour ={   checkin:new Date(Date.now()).toLocaleDateString(),checkout:new Date(Date.now()).toLocaleDateString(),
      start:null,end:null,contact:null,
      email:null,child:0,adult:0,name:nullmode:'tour'} */
      cityfrom=[];cityto=[];
  citytype= {domestic:["Kodaikanal","Madurai", "Rameshwaram", "Kanyakumari","Mahabalipuram", "pondicheri","Alleppey","Thekkady",
                      "thiruvananthapuram","Hampi","Mysore","Coorgue","Tirupathi",   "Hydrabad","Goa","Andaman","Ladakh","Agra", "Delhi",
                      "Darjeeling","Kolkata","Pune","Manali","Shimla"],
            international:[{name:"Dubai"},{name:"Maldives"},{name:"Prague(Czech Republic)"},{name:"Thailand"},{name:"Singapore"},{name:
              "Budapest(Hungary)"},{name:"Bangkok"},{name:"Malaysia"}]}    
  submitbooking(){
    
    if(this.bookingInfo.package == null){
      this.bookingInfo.mode = 'car'
      console.log(this.bookingInfo);
    }else{
      this.bookingInfo.mode = 'tour'
      console.log(this.bookingInfo);
    }
    this.sendEmail(this.bookingInfo);
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

  // email booking informatoin
  public sendEmail(bookingInfo) {
    console.log('sending email..')
    /* e.preventDefault();
    console.log(e) */

    var templateParams = {
      from_name: bookingInfo.name,
      to_name:"S2Dtravles",
      message: 'Please provide itenary/suggestions for the Following details!',
      checkin:bookingInfo.checkin,
      checkout:bookingInfo.checkout,
      adult:bookingInfo.adult,
      child:bookingInfo.child,
      start:bookingInfo.start,
      end:bookingInfo.end,
      contact:bookingInfo.contact,
      email:bookingInfo.email,
      mode:bookingInfo.mode
      
  };

    emailjs.send('service_12nppnf', 'template_lddpctq', templateParams, 'user_hDJsZNSAaPkIw7bfX766z')
    
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }



}
