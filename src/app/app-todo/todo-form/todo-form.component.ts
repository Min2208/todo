import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import {TodoServiceService} from "../../todo-service.service";
import {moment} from "ngx-bootstrap/chronos/testing/chain";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({});
  constructor(private service: TodoServiceService) {

  }
  listTodo: any[] = [];
  name: string = '';
  idSeq: number = 0;
  // @ts-ignore
  id: string;
  // @ts-ignore
  name: string;
  // @ts-ignore
  status: string;
  // @ts-ignore
  description: string;
  // @ts-ignore
  deadline: Date;
  todo: any;


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      status: new FormControl(''),
      description: new FormControl('',Validators.maxLength(200)),
      deadline: new FormControl('')
    });
    // this.todo = this.service.getTodo();
    // this.id = this.todo.id;
    // this.name = this.todo.name;
    // this.status = this.todo.status;
    // this.description = this.todo.description;
    // this.deadline = this.todo.deadline;
  }
  createTodo(c: AbstractControl) {
    const value = c.value;
    if(value.id === null || value.id === ''){
      this.idSeq += 1;
      value.id = this.idSeq;
    }
    this.service.addTodo(value);
    this.id = '';
    this.status = '';
    this.name = '';
    this.description = '';
    this.deadline = new Date();
  }
  // validateFromDate(control: AbstractControl) {
  //   const search = moment(control.value);
  //
  //   if ((search.isAfter(moment(), 'months'))) {
  //     return {
  //       toDateLagerThanDay: true
  //     };
  //   }
  //   return null;
  // }

}
