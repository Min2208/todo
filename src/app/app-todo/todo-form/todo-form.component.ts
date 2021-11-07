import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import {TodoServiceService} from "../../todo-service.service";
import {moment} from "ngx-bootstrap/chronos/testing/chain";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup = new FormGroup({});
  todoEdit: any;
  constructor(private service: TodoServiceService, private datePipe:DatePipe, private router : Router) {

  }
  name: string = '';
  todo: any;


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required, Validators.maxLength(50)]),
      status: new FormControl(''),
      description: new FormControl('',Validators.maxLength(200)),
      deadline: new FormControl('')
    }, this.compareCurrentDate);
    this.todoEdit = this.service.todoEdit;
    this.todoForm = new FormGroup({
      id: new FormControl(this.todoEdit.id),
      name: new FormControl(this.todoEdit.name,[Validators.required, Validators.maxLength(50)]),
      status: new FormControl(this.todoEdit.status),
      description: new FormControl(this.todoEdit.description,Validators.maxLength(200)),
      deadline: new FormControl(this.datePipe.transform(this.todoEdit.deadline, 'yyyy-MM-dd'))
    }, this.compareCurrentDate);
  }

  compareCurrentDate(c: AbstractControl) {
    debugger;
    const value = c.value;
    return new Date(value.deadline) > new Date() ? null : {isValidDate : true};
  }
  createTodo() {
    Object.keys(this.todoForm.controls).forEach((control: string) => {
      this.todoForm.get(control)?.markAsTouched();
    });
    if (this.todoForm.invalid) return;
    let value = {
      "id": this.todoForm.get('id')?.value,
      "status": this.todoForm.get('id')?.value ? this.todoForm.get('status')?.value : "New",
      "name": this.todoForm.get('name')?.value,
      "description": this.todoForm.get('description')?.value,
      "deadline": new Date(this.todoForm.get('deadline')?.value)
    }
    this.service.addTodo(value);
    this.todoForm.reset();
    this.router.navigate(['/todos']);
  }
}
