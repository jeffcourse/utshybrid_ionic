import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComiclistModel } from '../comiclist.model';
import { ComiclistService } from '../comiclist.service';
@Component({
  selector: 'app-comiclist',
  templateUrl: './comiclist.component.html',
  styleUrls: ['./comiclist.component.scss'],
})
export class ComiclistComponent implements OnInit {

  comics:any=[];

  constructor(public cls:ComiclistService,public route:ActivatedRoute) { }

  listComics() {
    var id:number = this.route.snapshot.params['id'];
    this.cls.comicList(id).subscribe(
    (data) => {
      this.comics = data;
    });
  }

  ngOnInit() {
    this.listComics();
  }

}
