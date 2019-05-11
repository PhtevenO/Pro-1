import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatSort,
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { Globals } from "../globals/globals";
import { AddNewPopComponent } from "./add-new-pop/add-new-pop.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.scss"]
})
export class MainContentComponent implements OnInit {
  Email;
  displayedColumns: string[]= ['name', 'year', 'position', 'days'];
  dataSource;
  originData = this.globals.tableData;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public globals: Globals,
    private dialog: MatDialog,
    private router: Router
  ) {}


  ngOnInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.globals.tableData);
    this.Email = localStorage.getItem("name");
  }

  initiateTable() {}

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate([""]);
  }

  addnew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    this.dialog.open(AddNewPopComponent, dialogConfig);
    const dialogRef = this.dialog.open(AddNewPopComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if(data === undefined ){
      } else {
        this.globals.tableData.push(data);
        this.dataSource = new MatTableDataSource(this.globals.tableData);
        this.dataSource.sort = this.sort;
      }
    });
  }
  delete(){

  }
}
