import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorites/favorite.service';
import { MusicdetailService } from 'src/app/services/musicdetail/musicdetail.service';

@Component({
  selector: 'app-musicdetails',
  templateUrl: './musicdetail.component.html',
  styleUrls: ['./musicdetail.component.css']
})
export class MusicdetailComponent implements OnInit {

  IMG_URL!: String
  title!: string
  favorites!: number
  description!: string
  likes!: number
  dislikes!: number

  constructor(private service: MusicdetailService, private serviceFav: FavoriteService) {
    this.IMG_URL = 'http://image.tmdb.org/t/p/w1280/5P8SmMzSNYikXpxil6BYzJ16611.jpg'
   }

  ngOnInit(): void {
    this.service.getByMusicId('622f6a75b59e5486dee9d39a').subscribe((res:any)=> {
      console.log("music detail::::",res.data)
      this.title = res.data.title
      this.favorites = 0
      this.description = res.data.description
      this.likes = 0
      this.dislikes = 0
    })
  }

  likeMusic() {
    this.serviceFav.addFavorite("622f6967476b268f715f1c5d", "622f6ac8b59e5486dee9d39d").subscribe((res:any)=> {
      console.log("like music ::::",res)
      
    })
  }

}
