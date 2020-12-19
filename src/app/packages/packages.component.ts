import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor() { }
packages={domestic:[
           {"img":"./assets/images/gallary/domestic/andaman_370_320.png","key":"AMN","name":"Andaman","meal":"Food Fecilities","trans":"transport","time":"4 Nights 5 Days"} 
          ,{"img":"./assets/images/gallary/domestic/threecity_370_320.png","key":"MRK","name":"Madurai, Rameswaram, kanyakumari","meal":"Food Fecilities","trans":"transport","time":"3 Nights 4 Days"} 
          ,{"img":"./assets/images/gallary/domestic/coorg_370_320.png","key":"CRG","name":"Coorg","meal":"Food Fecilities","trans":"transport","time":"2 Nights 3 Days"}
          ,{"img":"./assets/images/gallary/domestic/darjeeling_370_320.png","key":"DJG","name":"darjeeling","meal":"Food Fecilities","trans":"transport","time":"4 Nights 5 Days"} 
          ,{"img":"./assets/images/gallary/domestic/pondymaha_370_320.png","key":"PM","name":"Pondychery, Mahabalipuram","meal":"Food Fecilities","trans":"transport","time":"2 Nights 3 Days"}
          ,{"img":"./assets/images/gallary/domestic/kodaikanal_370_320.png","key":"KKL","name":"Kodaikanal","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
          ,{"img":"./assets/images/gallary/domestic/ladakh_370_320.png","key":"LDk","name":"Ladakh","meal":"Food Fecilities","trans":"transport","time":"4 Nights 5 Days"} 
          ,{"img":"./assets/images/gallary/domestic/thiruvananthapuram_370_320.png","key":"TPM","name":"Thiruvanandhapuram","meal":"Food Fecilities","trans":"transport","time":"2 Nights 3 Days"} 
          ,{"img":"./assets/images/gallary/domestic/palace_370_320.png","key":"MPC","name":"Mysore Palace","meal":"Food Fecilities","trans":"transport","time":"2 Nights 3 Days"} ],
international:[
       {"img":"./assets/images/gallary/international/Bankok_370_320.png","key":"BKK","name":"Bankok","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
      ,{"img":"./assets/images/gallary/international/Budapest_370_320.png","key":"BPT","name":"Budapest","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
      ,{"img":"./assets/images/gallary/international/Malaysia_370_320.png","key":"MLA","name":"Malaysia","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
      ,{"img":"./assets/images/gallary/international/maldives_370_320.png","key":"MDS","name":"Maldives","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
      ,{"img":"./assets/images/gallary/international/Singapore_370_320.png","key":"SPR","name":"Singapore","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"} 
      ,{"img":"./assets/images/gallary/international/Thailand_370_320.png","key":"TLD","name":"Thailand","meal":"Food Fecilities","trans":"transport","time":"1 Nights 2 Days"}]}

enquirydata={name:"",email:"",contact:"",username:"",destination:""};

sendenquiry(){
  console.log("Enqiry")
}
  ngOnInit(): void {
  }

}
