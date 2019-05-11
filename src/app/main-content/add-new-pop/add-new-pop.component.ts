import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Globals } from '../../globals/globals';
import {NewUserModel} from './newUser.model';
import { MatDialogRef, MatDialog} from '@angular/material';



@Component({
  selector: 'app-add-new-pop',
  templateUrl: './add-new-pop.component.html',
  styleUrls: ['./add-new-pop.component.scss']
})
export class AddNewPopComponent implements OnInit {

  user: NewUserModel = new NewUserModel();
  newUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private globals: Globals,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AddNewPopComponent>
  ) { }

  ngOnInit() {

    this.newUserForm = this.formBuilder.group({
      name: [this.user.name, [
        Validators.required,
      ]],
      year: [this.user.year, [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      position: [this.user.position, [
        Validators.required
      ]],
      days: [this.user.days, [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]]
    });

  }
  addUser(){
    let obj = this.user;
    if(this.newUserForm.invalid){
      this.dialogRef.close();
    } else {
      this.dialogRef.close(obj);
    }
  }
  close(){
    this.dialog.closeAll();
      // this.dialogRef.close();
  }

}
