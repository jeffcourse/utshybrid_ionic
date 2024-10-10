import { Component, OnInit } from '@angular/core';
import { SearchcomicService } from '../searchcomic.service';
import { SearchcomicModel } from '../searchcomic.model';

@Component({
  selector: 'app-searchcomic',
  templateUrl: './searchcomic.component.html',
  styleUrls: ['./searchcomic.component.scss'],
})
export class SearchcomicComponent implements OnInit {

  txtsearch="";
  searchdata:any=[];

  constructor(public sc:SearchcomicService) { }

  comicSearch() {
    this.sc.searchComic(this.txtsearch).subscribe(
    (data) => {
      this.searchdata = data;
    });
  }

  ngOnInit() {
    this.comicSearch();
  }

}
