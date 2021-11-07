import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoServiceService} from "../../todo-service.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: any;
  id: any;

  constructor(private service: TodoServiceService, private activateRoute: ActivatedRoute, private datePipe:DatePipe) {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.todo = this.service.detail(this.id);
    let now = new Date();
    if(this.todo.deadline < now){
      this.todo.status = 'Expired'
    }
    this.todo.deadline = this.datePipe.transform(this.todo.deadline, 'yyyy-MM-dd')
  }

  ngOnInit(): void {
  }

}
