import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-call-demo';
  aData: any;

  constructor(private user: UsersService) {
    this.user.getData().subscribe(data=>{
      console.warn(data);
      this.aData = data;
    })
  }
}
