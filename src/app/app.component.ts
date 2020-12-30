import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';
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
