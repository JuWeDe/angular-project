import { Component, Input } from '@angular/core';
import { PostHandler } from '../../post-handler';
import { Post } from '../../app.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() id?: any;
  @Input() author?: string;
  @Input() title?: string;
  @Input() category?: string;
  @Input() content?: string;
  records: Post[] = [];

  constructor(private ph: PostHandler) {
    this.records = ph.records;
  }

  deletePost(id: number) {
    this.ph.deletePost(id);
  }
  toArchieve(id: number) {
    this.ph.toArcheve(id);
  }
}
