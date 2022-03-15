import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorites/favorite.service';
import { MusicdetailService } from 'src/app/services/musicdetail/musicdetail.service';
import { UtilsService } from 'src/app/services/util/utils.service';

@Component({
  selector: 'app-musicdetails',
  templateUrl: './musicdetail.component.html',
  styleUrls: ['./musicdetail.component.css']
})
export class MusicdetailComponent implements OnInit {
  token!: string
  musicId!: string
  img_music!: string
  link!: string
  title!: string
  favorites!: number
  description!: string
  likes!: number
  dislikes!: number

  constructor(private service: MusicdetailService, private serviceFav: FavoriteService, private route: ActivatedRoute, private serviceUtil: UtilsService) {
    this.token = this.serviceUtil.getSession() || ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.musicId = res.musicId
      this.getMusicDetail(this.musicId)
    })
  }

  getMusicDetail(musicId: string) {
    this.serviceFav.getByTotalMusicId(musicId).subscribe((res: any) => {
      console.log(res)
      this.favorites = res
    })

    this.service.getByMusicId(musicId).subscribe((res: any) => {
      console.log("music detail::::", res.data)
      this.title = res.data.title
      this.link = res.data.filePath
      this.img_music = res.data.thumbnail
      this.description = res.data.description
      this.likes = 0
      this.dislikes = 0
    })
  }

  likeMusic() {
    if (this.token != '') {
      console.log("userId", this.serviceUtil.getUserId())
      console.log("musicId", this.musicId)
      this.serviceFav.addFavorite(this.serviceUtil.getUserId(), this.musicId).subscribe((res: any) => {
        console.log("like music ::::", res)
      })
    }
  }

}
