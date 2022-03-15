import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorites/favorite.service';

export interface FavoriteElement {
  music: String;
  date: String;
  favoriteId: string;
}

let ELEMENT_DATA: FavoriteElement[] = [];

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'music', 'date', 'favoriteId'];
  dataSource: FavoriteElement[] = [];

  constructor(private service: FavoriteService, private router:Router) { }

  ngOnInit(): void {
    this.dataSource = []
    ELEMENT_DATA = []
    
    this.service.getAll('622f6967476b268f715f1c5e').subscribe((res:any)=> {
      res['data'].forEach((element:any) => {
        ELEMENT_DATA.push({
          date: element['createdAt'],
          music: element['music']['title'],
          favoriteId: element['_id']
        })
      });

      this.dataSource = ELEMENT_DATA
    })
  }

  deleteFavorite(favoriteId: String, music: String) {
    if(confirm("Are you sure to delete "+music+"?")) {
      console.log("delete Favorite:", favoriteId)

      this.service.postDelete(favoriteId).subscribe((res:any)=>{
        ELEMENT_DATA = ELEMENT_DATA.filter((fav)=> fav.favoriteId != favoriteId)
        this.dataSource = ELEMENT_DATA
      })
    }
  }

}
