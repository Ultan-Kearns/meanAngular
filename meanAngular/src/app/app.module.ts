import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApiService } from './services/api.service';

import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
MatExpansionModule,
BrowserModule,
BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
