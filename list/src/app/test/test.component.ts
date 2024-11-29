import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  todos: { title: string; completed: boolean }[] = [];
  newta: string = '';
  filt: 'activo' | 'completado' | 'todos' = 'todos';
  save: string = '';

  get filtro() {
    switch (this.filt) {
      case 'activo':
        return this.todos.filter(todo => !todo.completed);
      case 'completado':
        return this.todos.filter(todo => todo.completed);
      default:
        return this.todos;
    }
  }
  filter(filt: 'todos' | 'activo' | 'completado') {
    this.filt 
  }

  add() {
    if (this.newta.trim()) {
      this.todos.push({ title: this.newta, completed: false });
      this.save = this.newta;
      this.newta = '';
    }
  }
  

  clear() {
    this.save = '';
  }

  update() {
    this.todos;
  }

  get pendientes() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}
