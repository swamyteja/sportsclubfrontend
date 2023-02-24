import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatecoach',
  templateUrl: './updatecoach.component.html',
  styleUrls: ['./updatecoach.component.css']
})
export class UpdatecoachComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UpdatecoachComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any

    ) { }


  ngOnInit(): void {

  }

  onNoClick(){
    window.location.reload();
}

}
