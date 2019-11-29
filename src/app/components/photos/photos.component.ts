import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Photos } from 'src/app/model/Photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photos[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPhotos().subscribe(
      resp => this.photos = resp,
      error => console.log(error)
    )
  }
  click():void {
    alert('Works');
  }

}
