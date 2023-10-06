import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private https: HttpServerService) { }

  public ngOnInit(): void {
    this.https.getComments().subscribe((data)=>{
      console.log('dataComments',data)
    });
    this.https.getUser(5).subscribe((data)=>{
      console.log('dataUser',data.results)
    });
  }

}
