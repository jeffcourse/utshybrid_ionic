import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LoginService } from './login.service';
import { CategoriesService } from './categories.service';
import { ComiclistComponent } from './comiclist/comiclist.component';
import { ComiclistService } from './comiclist.service';
import { ReadcomicComponent } from './readcomic/readcomic.component';
import { ReadcomicService } from './readcomic.service';
import { MyfavoritesComponent } from './myfavorites/myfavorites.component';
import { MyfavoritesService } from './myfavorites.service';
import { SearchcomicComponent } from './searchcomic/searchcomic.component';
import { SearchcomicService } from './searchcomic.service';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes:Routes=[
  {path:'category',component:CategoriesComponent},
  {path:'comiclist/:id',component:ComiclistComponent},
  {path:'readcomic/:idx',component:ReadcomicComponent},
  {path:'myfavorites',component:MyfavoritesComponent},
  {path:'searchcomic',component:SearchcomicComponent},
];

@NgModule({
  declarations: [AppComponent,CategoriesComponent,ComiclistComponent,ReadcomicComponent,MyfavoritesComponent,SearchcomicComponent],
  imports: [IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LoginService,CategoriesService,ComiclistService,ReadcomicService,MyfavoritesService,SearchcomicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
