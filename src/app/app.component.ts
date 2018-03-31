import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  form: FormGroup;
  toDoListItems: Object[] = [];
  ngOnInit() {
    this.form = new FormGroup({
        toDoInput: new FormControl('', Validators.required)
    });
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  addToDo() {
    console.log('New Item', this.form.value);
    this.toDoListItems.push({
        toDoText: this.form.value.toDoInput,
        fullfield: false,
        id: this.getRandomInt(0, 100000)
    });
    console.log(this.toDoListItems);
  }
}
