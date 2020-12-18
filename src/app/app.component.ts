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

  onCreateClicked() {
    this.showCreateForm = true;
    this.disableCancel = false;
  }

  onCancelClicked() {
    this.showCreateForm = false;
    this.disableCancel = true;
  }
}
