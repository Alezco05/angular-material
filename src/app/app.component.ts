import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Photos } from './model/Photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'material';
  albumsId: number[] = [1,2,3];
  constructor(private dataService: DataService){}

  ngOnInit(){
   
  }
}
