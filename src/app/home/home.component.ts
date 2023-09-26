import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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
      {ten:'Táo', gia:12,haGia:1,pipe:1},
      { ten:'Ổi', gia:13,haGia:0,pipe:1 },
      { ten:'Xoài', gia:-2,haGia:1,pipe:0 }
    ];
    public districts:string[]=[];
    public VietNamData=[
      {
        city:'An Giang',
        district:[
        "Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"
      ]
      },
      {
        city:'Bà Rịa - Vũng Tàu',
        district:[
          "Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"
      ]
      }
    ];
    public counter=0;
    public binhPhuong=0;
    constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log("cities = ", this.VietNamData);

      this.counter=this.common.counter;
      this.binhPhuong=this.common.binhPhuong(this.counter);
      this.common.counter++;

  }
 public resetName(): void{
  console.log("sadas");
  this.name="Cuong";
 }
 public changeCity(event:any){
  const city=event.target.value;
   console.log('event',city);
  const search = this.VietNamData.filter((data)=> data.city===city);
  if( search.length>0){
    this.districts=search[0].district;
  }

 }
}
