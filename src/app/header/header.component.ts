import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('sending email')
  }

  public sendEmail(e: Event) {
    console.log('dddd')
    e.preventDefault();
    console.log(e)

    var templateParams = {
      from_name: 'James',
      to_name:'Mike',
      message: 'Check this out!'
  };

    emailjs.send('service_12nppnf', 'template_lddpctq', templateParams, 'user_hDJsZNSAaPkIw7bfX766z')
    
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  

}
