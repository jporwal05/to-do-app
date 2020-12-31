import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  showCreateForm = false;
  hideCancel = true;

  constructor(public taskService: TaskService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(["/login"]);
    } else {
      this.taskService.getTasks(this.authService.firstName);
    }
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
