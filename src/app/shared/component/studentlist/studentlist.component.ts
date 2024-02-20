import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  stdForm!: FormGroup
  constructor(private _uuidservice: UuidService, private _stdservice: StudentService) { }

  ngOnInit(): void {

    this.createstdlist()




  }

  createstdlist() {
    this.stdForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required]),
    })
  }
  onStdSubmit() {
    if (this.stdForm.valid) {
      console.log(this.stdForm.value);
      let obj = { ...this.stdForm.value, id: this._uuidservice.uuid }
     this._stdservice.addstd(obj)

    }
  }
}
