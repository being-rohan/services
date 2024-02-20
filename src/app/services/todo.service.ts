import { Injectable } from '@angular/core';
import { Itodo } from '../shared/model/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArray: Array<Itodo> = [
    { todoItem: "javScript", id: "1" },
    { todoItem: "TypeScript", id: "2" },
    { todoItem: "Angular", id: "3" },
  ]

  constructor() { }
  fetchtodos(): Array<Itodo> {
    return this.todoArray
  }
  addtodo(todoobj: Itodo) {
    this.todoArray.push(todoobj);

  }

  removetodo(id: string) {

    let getIndex = this.todoArray.findIndex(todo => todo.id === id)
    console.log(getIndex);
    this.todoArray.splice(getIndex,1)
    

  }
}
