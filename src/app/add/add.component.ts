import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  display=false;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.display = true;
  }

  onCancel() {
    this.display = false;
  }

}
