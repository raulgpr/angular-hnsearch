import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HackernewsService } from './services/hackernews.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HackernewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
