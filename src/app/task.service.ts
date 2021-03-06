import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  BASE_URL = "http://localhost:8080/api/task";
  private taskStore: any = [];
  private taskSubject = new Subject();
  taskList = this.taskSubject.asObservable();


  constructor(private http: HttpClient, private authService: AuthService) { }

  getTasks(userName: any) {
    userName = userName ? "/" + userName : "";
    return this.http.get(this.BASE_URL + "/all" + userName, {headers: this.authService.tokenHeader}).subscribe(response => {
      let res: any = response;
      this.taskStore = res;
      this.taskSubject.next(this.taskStore);
    }, (err) => {
      throw err;
    });
  }

  addTask(task: any) {
    this.http.post(this.BASE_URL, task, {headers: this.authService.tokenHeader}).subscribe(response => {
      let res: any = response;
      this.taskStore.push(res);
      this.taskSubject.next(this.taskStore);
    }, (err) => {
      throw err;
    });
  }

  deleteTask(id: any) {
    this.http.delete(this.BASE_URL + "/" + id, {headers: this.authService.tokenHeader}).subscribe(response => {
      let res: any = response;
      let index = this.taskStore.findIndex(task => task.id == res.id);
      this.taskStore.splice(index, 1);
      this.taskSubject.next(this.taskStore);
    }, (err) => {
      throw err;
    })
  }

  editTask(task: any) {
    this.http.put(this.BASE_URL + "/" + task.id, task, {headers: this.authService.tokenHeader}).subscribe(response => {
      let res: any = response;
      let index = this.taskStore.findIndex(t => t.id == res.id);
      this.taskStore.splice(index, 1, res);
      this.taskSubject.next(this.taskStore);
    }, (err) => {
      throw err;
    })
  }
}
