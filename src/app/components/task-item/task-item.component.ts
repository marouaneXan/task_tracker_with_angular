import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task:Task={
    text: '',
    day: '',
    reminder: true
  };
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter()
  faTrash = faTrash;
  @Output() onToggleTask:EventEmitter<Task>=new EventEmitter()
  removeTask(task:Task){
    this.onDeleteTask.emit(task)
  }

  changeReminder(task:Task){
    this.task.reminder=!this.task.reminder
    this.onToggleTask.emit()
  }
  
}
