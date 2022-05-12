import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Match App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
        next: (result:any) => {this.users = result},
        error: (error:any) => {console.log(error)}
    })
  }
}
