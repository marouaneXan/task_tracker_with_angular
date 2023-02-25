import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.css']
})
export class ModalAddTaskComponent implements OnInit {
  @Input() close:Function=()=>{}
  @Input() show:Boolean=false
  ngOnInit(){
    console.log(this.show);
  }
}
