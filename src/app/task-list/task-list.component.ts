import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
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
