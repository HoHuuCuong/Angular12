import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private http: HttpServerService) { }

  ngOnInit(): void {
    const payload= {"id":10, "body": "some comment 7", "postId":8};
    this.http.postComments(payload).subscribe((data=>{
      console.log('postdata',data);
    })
      )}

}
