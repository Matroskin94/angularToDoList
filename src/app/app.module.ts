import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
