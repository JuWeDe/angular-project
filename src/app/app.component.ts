import { Component, NgModule } from '@angular/core';
import { RecordService } from './record-service.service';
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
  

  constructor(private recordService: RecordService) {
    this.records = recordService.records;
    this.archives = recordService.archieves;
  }
  

  createPost() {
    if (
      this.author &&
      this.title &&
      this.category &&
      this.content
    )
      this.recordService.createPost(
        new Post(this.id, this.author, this.title, this.category, this.content)
      );
  }
}
