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
  userId!: string
  favoriteId!: string
  img_music!: string
  link!: string
  title!: string
  favoritesTotal!: number
  description!: string
  likes!: number
  dislikes!: number
  isFavorite!: string

  constructor(private service: MusicdetailService, private serviceFav: FavoriteService, private route: ActivatedRoute, private serviceUtil: UtilsService) {
    this.token = this.serviceUtil.getSession() || ''
  }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.musicId = res.musicId
      this.userId = this.serviceUtil.getUserId()
      this.getMusicDetail(this.musicId)
      this.validFavorite()
    })
  }

  validFavorite() {
    return this.serviceFav.getFavoriteByMusicUser(this.musicId, this.userId).subscribe((res: any) => {
      console.log("favorite:::::", res.data)
      if (res.data != null) {
        this.favoriteId = res.data._id
        this.isFavorite = 'true'
      }
      else this.isFavorite = 'false'
    })
  }

  getMusicDetail(musicId: string) {

    this.getTotalFavorites(musicId)

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

  getTotalFavorites(musicId: string) {
    this.serviceFav.getByTotalMusicId(musicId).subscribe((res: any) => {
      console.log("total Likes:: ", res)
      this.favoritesTotal = res
    })
  }

  likeMusic() {
    if (this.token != '') {
      if (this.isFavorite == 'true') {
        console.log("idFavorie::", this.favoriteId)
        this.serviceFav.removeFavorite(this.favoriteId).subscribe((res: any) => {
          console.log('remove favorite::', res)
          --this.favoritesTotal
          this.isFavorite = 'false'
        })
      } else {
        this.serviceFav.addFavorite(this.serviceUtil.getUserId(), this.musicId).subscribe((res: any) => {
          console.log("like music ::::", res)
          if (res.data != null) {
            this.favoriteId = res.data._id
            this.isFavorite = 'true'
            this.getTotalFavorites(this.musicId)
          }
        })
      }
    }
  }

}
