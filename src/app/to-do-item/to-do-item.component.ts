import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
    @Input()
    toDoItem: {
        toDoText: string,
        fullfield: boolean,
        id: number
    };
    @Input() idx: number
    toDoNumber = 1;
    toDoText = 'Finish Angular Todo Application'    

    ngOnInit() {
    }

}
