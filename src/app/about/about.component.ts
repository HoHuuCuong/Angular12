import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public loginName="admin";
  public mycolor="orange";
  public counter=0;
  public binhPhuong=0;
  public qrInfo='https://www.facebook.com/HoHuuCuong312';
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter=this.common.counter;
    this.binhPhuong=this.common.binhPhuong(this.counter);
    this.common.counter++;
  }
  public change(event:any):void{
    console.log(event.target.value);
    this.qrInfo=event.target.value;
  }

}
