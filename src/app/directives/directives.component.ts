import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  show:boolean=false;
  array:Date[]=[]
  i:number=0
  toggleParagraph(){
    this.show=!this.show
    this.array.push(new Date())
  }
}
