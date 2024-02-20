import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Istudent } from '../../model/todo.interface';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.scss']
})
export class StudenttableComponent implements OnInit {

  stdarry!: Array<Istudent>
  constructor(private _stdservice: StudentService) { }

  ngOnInit(): void {
    this.stdarry = this._stdservice.fetchallstudent()
  }
  ondelete(id:string) {
  console.log(id);
  this._stdservice.removestd(id)
  

  }
}
