import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Output() taskAdded = new EventEmitter();
  task = {
    title: '',
    content: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createForm: any) {
    this.task = {
      title: createForm.title,
      content: createForm.content
    };
    this.taskAdded.emit(this.task);
  }

}