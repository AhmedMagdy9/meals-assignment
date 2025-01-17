import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-childteam',
  imports: [],
  templateUrl: './childteam.component.html',
  styleUrl: './childteam.component.css'
})
export class ChildteamComponent {

 @Output() imgEvent: EventEmitter<boolean> = new EventEmitter


 startEvrnt() :void{
  this.imgEvent.emit(true)
 }

}
