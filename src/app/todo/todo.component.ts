import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  showCreateForm = false;
  hideCancel = true;

  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks();
  }

  onCreateClicked() {
    this.showCreateForm = true;
    this.hideCancel = false;
  }

  onCancelClicked() {
    this.showCreateForm = false;
    this.hideCancel = true;
  }

  onTaskAdded(task: any) {
    this.taskService.addTask(task);
  }

}
