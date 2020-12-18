import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() taskList: any;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any) {
    const index = this.taskList.indexOf(task);
    if (index >= 0) {
      this.taskList.splice(index, 1);
    }
  }

}
