import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMusic: { _id: string, title: string, artist: string, description: string, thumbnail: string }[] = [];
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((res:any)=>{
      this.allMusic = res['data']
    })
  }

}
