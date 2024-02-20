import { Injectable } from '@angular/core';
import { Istudent } from '../shared/model/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdArray: Array<Istudent> = [
    {
      fname: "Rohan",
      lname: "panchal",
      email: "rohanpanchal@gmail.com",
      contact: 1478523695,
      id: "456"
    },
    {
      fname: "Nikhil",
      lname: "singe",
      email: "rohanpanchal@gmail.com",
      contact: 3698521470,
      id: '459'
    }
  ]
  constructor() { }

  fetchallstudent(): Array<Istudent> {
    return this.stdArray


  }
  addstd(obj :Istudent){
    this.stdArray.push(obj)
 


  }
 removestd(id:string){
   let getindex=this.stdArray.findIndex(std => std.id===id)
   console.log(getindex);

   this.stdArray.splice(getindex,1);
   
 }
}
