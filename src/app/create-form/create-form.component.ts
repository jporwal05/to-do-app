import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
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
