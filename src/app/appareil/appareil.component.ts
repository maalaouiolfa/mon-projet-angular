import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input()
  appareilName :String;
  @Input() appareilStatus :String;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
  onAllume(){
    return this.appareilStatus
  }
  getStatus() {
    return this.appareilStatus;
   }
   getColor(){
     if(this.appareilStatus==='allume'){
     return 'green';}
     else if(this.appareilStatus==='eteint'){
       return 'red';
     }
   }
}
