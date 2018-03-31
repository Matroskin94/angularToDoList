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
  inputValue = '';
  toDoListItems: Array<{
        toDoText: string,
        fullfield: boolean,
        id: number
    }> = [{
        toDoText: 'Item1',
        fullfield: false,
        id: 123
    }];
  ngOnInit() {
    this.form = new FormGroup({
        toDoInput: new FormControl('', Validators.required)
    });
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  onFullFiled( id: number ){
    this.toDoListItems.find(item => item.id === id).fullfield = !this.toDoListItems.find(item => item.id === id).fullfield;
  }
  onDeleted( id: number ) {
    this.toDoListItems = this.toDoListItems.filter(item => {
        return id !== item.id;
    });
  }
  addToDo() {
    this.toDoListItems.push({
        toDoText: this.inputValue,
        fullfield: false,
        id: this.getRandomInt(0, 100000)
    });
    this.inputValue = '';
  }
}
