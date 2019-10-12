import { Component, OnInit } from '@angular/core';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dateStr : string;
  
  constructor() { 
    setInterval(() => {
      this.dateStr = new Date().toDateString() + "& time is " + new Date().toLocaleTimeString();
    },1000);

  }

  ngOnInit() {
  }

}
