import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Itodo } from '../../model/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnChanges{

  todos!:Array<Itodo>
  constructor(private _todoservice:TodoService) { }
  ngOnChanges(chsnges : SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.todos= this._todoservice?.fetchtodos();
    console.log(this.todos)
  }

  ondelete(id:string){
      console.log(id);
      this._todoservice.removetodo(id)
      
  }
}
