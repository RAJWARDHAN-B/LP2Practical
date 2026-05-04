import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ ADD THIS

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ ADD HERE
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent {
  newTask: string = '';
  tasks: { title: string; editing: boolean }[] = [];

  addTask() {
    if (!this.newTask.trim()) return;
    this.tasks.push({ title: this.newTask, editing: false });
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(task: any) {
    task.editing = true;
  }

  saveTask(task: any) {
    task.editing = false;
  }
}