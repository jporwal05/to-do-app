import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app';
  showCreateForm = false;
  disableCancel = true;
  taskList: {title: string, content: string}[] = [];

  onCreateClicked() {
    this.showCreateForm = true;
    this.disableCancel = false;
  }

  onCancelClicked() {
    this.showCreateForm = false;
    this.disableCancel = true;
  }

  onTaskAdded(task: any) {
    this.taskList.push(task);
    console.log(this.taskList);
  }
}
