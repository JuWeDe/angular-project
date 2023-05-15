import { Component, NgModule } from '@angular/core';
import { PostHandler } from './post-handler';
export class Post {
  constructor(
    public id: number,
    public author: string,
    public title: string,
    public category: string,
    public content: string
  ) {}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  id: number = 1;
  author: string = '';
  recordTitle: string = '';
  category: string = '';
  content: string = '';
  title: string = '';
  records: Post[] = [];
  archives: any[] = [];

  constructor(private ph: PostHandler) {
    this.records = ph.records;
    this.archives = ph.archieves;
  }

  createPost() {
    if (this.author && this.title && this.category && this.content)
      this.ph.createPost(
        new Post(this.id, this.author, this.title, this.category, this.content)
      );
  }
}
