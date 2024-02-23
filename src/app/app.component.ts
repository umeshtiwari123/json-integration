import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public userInfo : any;
  public constructor(private http: HttpClient){}
  ngOnInit(): void {
    const url: string = '/assets/data.json';
    this.http.get(url).subscribe((response) =>{
      this.userInfo = response;
    });
  }
  // title = 'json-read-example';
}
