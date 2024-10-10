import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  json=[];
  user_name="";
  user_id="";
  login_user="";
  login_passwd="";
  login_error="";

  constructor(public storage:Storage, public ls:LoginService) {}

  login() {
    this.ls.checkLogin(this.login_user, this.login_passwd).subscribe(
    (data) => {
      this.json = data;
      if(this.json['result'] == "success"){
        this.user_name=this.json['user_name'];
        this.user_id = this.json['user_id'];
        this.storage.set('user_name',this.user_name);
        this.storage.set('user_id',this.user_id);
      }
      else{
        this.login_error="Username or password is wrong";
      }
    });
  }
  logout(){
    this.storage.remove('user_id');
    this.user_id="";
    this.login_user="";
    this.login_passwd="";
    this.login_error="";
  }

  async ngOnInit(){
    await this.storage.create();
    this.user_id=await this.storage.get('user_id');
    this.user_name=await this.storage.get('user_name');
  }
}
