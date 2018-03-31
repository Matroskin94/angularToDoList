import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
    @Input() idx: number;
    @Output('onFullFill') emitFullFill = new EventEmitter<number>();
    @Output('onDelete') emitDelete = new EventEmitter<number>();

    handleFullFill(){
        this.emitFullFill.emit(this.toDoItem.id);
    }
    handleDelete(){
        this.emitDelete.emit(this.toDoItem.id);
    }
    ngOnInit() {
    }

}
