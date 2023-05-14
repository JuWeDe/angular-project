import { Component, Input } from '@angular/core';
import { RecordService } from '../../record-service.service';

@Component({
  selector: 'app-archeve',
  templateUrl: './archeve.component.html',
  styleUrls: ['./archeve.component.scss'],
})
export class ArcheveComponent {
  @Input() title: any;

  archives: any[] = [];
  constructor(private recordService: RecordService) {
    this.archives = recordService.archieves;
  }
}
