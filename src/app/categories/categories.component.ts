import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoryModel } from '../category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  category:any=[];

  constructor(public cs:CategoriesService) { }

  listCategory() {
    this.cs.categoryList().subscribe(
      (data)=> {
        this.category = data;
      });
  }

  ngOnInit() {
    this.listCategory();
  }

}
