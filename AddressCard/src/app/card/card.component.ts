import { Component, OnInit, Input } from '@angular/core';
import {User} from "./user.model";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  user : any;
  @Input("inputObj") userObj : User;
  constructor() { 
    
  }

  ngOnInit() {
    this.user = {
      name : this.userObj.name,
      city : this.userObj.city,
      designation : this.userObj.designation,
      phone: this.userObj.phone
    };
  }

}
