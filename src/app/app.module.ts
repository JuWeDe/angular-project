import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { ArchiveComponent } from './components/archive/archive.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    ArchiveComponent,
  ],
  imports: [BrowserModule, MatIconModule, MatToolbarModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
