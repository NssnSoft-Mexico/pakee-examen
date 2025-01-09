import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask(): void {
    if(this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false});
      this.newTask ='';
    }
  }

  toogleTask(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
