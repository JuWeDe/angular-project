import { Component, Input } from '@angular/core';
import { PostHandler } from '../../post-handler';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent {
  @Input() title?: string;

  archives: any[] = [];
  constructor(private ph: PostHandler) {
    this.archives = ph.archives;
  }
}
