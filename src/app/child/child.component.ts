import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() name='';
@Output() conGoi: EventEmitter<any>= new EventEmitter();
  constructor() { }
  public goicha(){
    console.log("goi cha")
    this.conGoi.emit(this.name);
  }
  ngOnInit(): void {
  }

}
