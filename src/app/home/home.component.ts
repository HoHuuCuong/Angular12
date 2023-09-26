import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name='Cuong'
  public age =19;
  public traicay=["Táo","Xoài","Ổi","Nho"];
  public traicay2=[
      {ten:'Táo', gia:12,haGia:1},
      { ten:'Ổi', gia:13,haGia:0 },
      { ten:'Xoài', gia:-2,haGia:1 }
    ];
  constructor() { }

  ngOnInit(): void {
    console.log("trái cây = "+ this.traicay);
  }
 public resetName(): void{
  console.log("sadas");
  this.name="Cuong";
 }
}
