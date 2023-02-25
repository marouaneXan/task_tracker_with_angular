import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'simple_app_with_angular';
  @Input() show:boolean=false 
  display(){
    this.show=true
  }
}
