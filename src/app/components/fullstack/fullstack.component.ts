import { Component, OnInit } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html',
  styleUrls: ['./fullstack.component.css']
})
export class FullstackComponent implements OnInit {

  fullstackdiagram = require("./FullStack.jpg");

  constructor() { }

  ngOnInit() {
  }

}
