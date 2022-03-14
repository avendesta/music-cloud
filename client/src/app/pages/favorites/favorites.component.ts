import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorites/favorite.service';

export interface PeriodicElement {
  nro: number;
  music: String;
  date: String;
  options: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nro: 1, music: 'Hydrogen adsf asdf asdf asdf asdf asdfa dsaf', date: "1.0079", options: 'H'},
  {nro: 2, music: 'Helium', date: "4.0026", options: 'He'}
];

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  displayedColumns: string[] = ['nro', 'music', 'date', 'options'];
  dataSource = ELEMENT_DATA;

  constructor(private service: FavoriteService) { }

  ngOnInit(): void {
    this.service.getAll('622f6967476b268f715f1c5d').subscribe((res)=> {
      console.log(res)
    })
  }

}
