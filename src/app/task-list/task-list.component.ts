import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() taskList: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(id: any) {
    this.taskService.deleteTask(id);
  }

}
