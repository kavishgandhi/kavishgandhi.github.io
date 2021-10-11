import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-resume-dialog',
  templateUrl: './resume-dialog.component.html',
  styleUrls: ['./resume-dialog.component.css']
})
export class ResumeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResumeDialogComponent>) { }
  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
