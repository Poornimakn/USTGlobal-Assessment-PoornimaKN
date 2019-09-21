import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  users=[];
  
  constructor() { }
  
  post(form:NgForm)
  {
    this.users.push(form.value);
    console.log(this.users);
  }
  
  ngOnInit() {
  }

}
