import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();
  task: any = {
    title: '',
    content: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(createForm: any) {
    this.task = {
      title: createForm.title,
      content: createForm.content
    };
    this.task.userName = this.authService.firstName;
    this.taskAdded.emit(this.task);
  }
}
