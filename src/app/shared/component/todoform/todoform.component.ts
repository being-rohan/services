import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { UuidService } from 'src/app/services/uuid.service';
import { Itodo } from '../../model/todo.interface';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {


  todoForm!: FormGroup
  constructor(private _uuidservice: UuidService, private _todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoItem: new FormControl(null, [Validators.required])

    })

  }
  async onsubmit() {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value)
      let obj = { ...this.todoForm.value, id:this._uuidservice.uuid() }
      console.log(obj);
      await this._todoservice.addtodo(obj)
      this.todoForm.reset();


    }
  }


}
