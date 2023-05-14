import { Component, Input } from '@angular/core';
import { RecordService } from '../../record-service.service';
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

  constructor(private recordService: RecordService) {
    this.records = recordService.records;
  }

  deletePost(id: number) {
    this.recordService.deletePost(id);
  }
  toArchieve(id: number) {
    this.recordService.toArcheve(id);
  }
}
