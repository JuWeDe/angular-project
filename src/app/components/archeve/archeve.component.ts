import { Component, Input } from '@angular/core';
import { PostHandler } from '../../post-handler';

@Component({
  selector: 'app-archeve',
  templateUrl: './archeve.component.html',
  styleUrls: ['./archeve.component.scss'],
})
export class ArcheveComponent {
  @Input() title?: string;

  archives: any[] = [];
  constructor(private ph: PostHandler) {
    this.archives = ph.archieves;
  }
}
