import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatDialogConfig } from  '@angular/material';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public  username:  string  =  "";
    public  password:  string  =  "";

  constructor(private  dialog:  MatDialog) {}

  login(){
    console.log("You hit the login")
  }

}