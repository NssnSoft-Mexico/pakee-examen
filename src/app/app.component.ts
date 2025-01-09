import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ LoginComponent, TodoListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-pakke';
}
