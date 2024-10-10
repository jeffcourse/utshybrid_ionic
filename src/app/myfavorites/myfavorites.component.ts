import { Component, OnInit } from '@angular/core';
import { ComiclistModel } from '../comiclist.model';
import { MyfavoritesService } from '../myfavorites.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-myfavorites',
  templateUrl: './myfavorites.component.html',
  styleUrls: ['./myfavorites.component.scss'],
})
export class MyfavoritesComponent implements OnInit {

  user_id=0;
  favorites:any=[];

  constructor(public app:AppComponent,public mfs:MyfavoritesService) { }

  myFavorites() {
    this.mfs.getFavorites(this.user_id).subscribe(
    (data) => {
      this.favorites = data;
    });
  }

  async ngOnInit() {
    this.user_id=await this.app.storage.get('user_id');
    this.myFavorites();
  }

}
