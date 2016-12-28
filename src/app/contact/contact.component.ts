import { Component, OnInit } from '@angular/core';
import {Email} from '../email';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['style.css']
})
export class ContactComponent implements OnInit {
    constructor(private _contactService : ContactService) { }
    public message: Email = {name: '', email: '', message: '',phone:''};

  ngOnInit() {
  }
  sendMail() {
      this._contactService.postEmail(this.message).subscribe(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
    handleResponse(response){
     // console.log(`msg is: {response.status}`);

     if(response.status =='success'){
       this.message = {name: '', email: '', message: '',phone:''};
       alert('Your message has been recieved...Thanks');
     }

     if(response.status =='error'){
       alert('some unknown error happens');
     }
   }

}
