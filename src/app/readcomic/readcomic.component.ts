import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadcomicModel } from '../readcomic.model';
import { ReadcomicService } from '../readcomic.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-readcomic',
  templateUrl: './readcomic.component.html',
  styleUrls: ['./readcomic.component.scss'],
})
export class ReadcomicComponent implements OnInit {

  readcomic:any=[];
  ratingdata:any=[];
  totalrating=0;
  countrating=0;
  newrating=1;
  ratingres=[];
  favres=[];
  unfavres=[];
  commentres:any=[];
  user_id=0;
  comment="";
  detailcomment:any=[];
  arrNum:any=[];
  commentNum=0;

  constructor(public app:AppComponent,public rcs:ReadcomicService,public route:ActivatedRoute) { }

  comicsRead() {
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.readComic(idx).subscribe(
    (data) => {
      this.readcomic = data;
    });
  }

  rating(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.getRating(idx).subscribe(
      (data) => {
        this.ratingdata = data;
        this.totalrating = this.ratingdata['totalrating'];
        this.countrating = this.ratingdata['countrating'];
      });
  }

  sendRating(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.inputRating(idx, this.user_id, this.newrating).subscribe(
      (data) => {
        this.ratingres = data;
        if(this.ratingres["result"] == "success"){
          alert("Added Successfully");
          this.rating();
        }
        else{
          alert("Rate Score is the same as previous one");
        }
      });
  }

  favorite(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.addFavorite(idx, this.user_id).subscribe(
      (data) => {
        this.favres = data;
        if(this.favres["result"] == "success"){
          alert("Successfully Added to My Favorite");
        }
        else{
          alert("Comic is already in My Favorite!");
        }
      });
  }

  unfavorite(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.removeFav(idx, this.user_id).subscribe(
      (data) => {
        this.unfavres = data;
        if(this.unfavres["result"] == "success"){
          alert("Successfully Removed");
        }
        else{
          alert("Comic is not in My Favorite!");
        }
      });
  }

  commentInput(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.inputComment(idx, this.user_id,  this.comment).subscribe(
      (data) => {
        this.commentres = data;
        if(this.commentres["result"] == "success"){
          alert("Added Successfully");
          this.comments();
          this.commentnum();
        }
        else{
          alert("Submission Failed");
        }
      });
  }

  comments() {
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.getComment(idx).subscribe(
    (data) => {
      this.detailcomment = data;
    });
  }

  commentnum(){
    var idx:number = this.route.snapshot.params['idx'];
    this.rcs.getCommentNum(idx).subscribe(
    (data) => {
      this.arrNum = data;
      this.commentNum = this.arrNum['countkomentar'];
    });
  }

  async ngOnInit() {
    this.comicsRead();
    this.rating();
    this.comments();
    this.commentnum();
    this.user_id=await this.app.storage.get('user_id');
  }

}
