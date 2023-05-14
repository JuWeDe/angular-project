import { Injectable } from '@angular/core';
import { Post } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class RecordService {

  createPost(post: Post) {
    post.id = this.id;
    this.records.push(post);
    this.id++;
  }
  records: Post[] = [
    {
      id: 1,
      author: 'Ralf Schumacher',
      title: 'Mick will have a race seat in Audi',
      category: 'racing news',
      content:
        'As Mick Schumacher currently sits in his reserve driver role at Mercedes, he could be lining up a return to a full-time seat in Formula 1. After Haas chose not to bring back Mick Schumacher for 2023, he was unable to find another full-time seat in Formula 1. However, he willingly accepted a reserve driver role at Mercedes with a plan in mind regarding his future. Being the son of the great Michael Schumacher has led Mick to be around the sport from a very young age. He has quite a good understanding of the different aspects and angles involved in Formula 1. Additionally, Mick’s connection to his father has led to the spotlight being on him for quite some time.Some believe that the Schumacher name has led to Mick gaining a certain advantage when it comes to landing a full-time seat. Bernie Ecclestone, the former CEO of Formula 1, is one of them.',
    },
  ];
  archieves: any[] = [];
  id: number = 1;

  deletePost(id: number) {
    const index = this.records.findIndex((record) => record.id === id);
    if (index !== -1) {
      this.records.splice(index, 1);
    }
  }
  toArcheve(id: number) {
    const index = this.records.findIndex((record) => record.id === id);

    const record = this.records.find((rec) => rec.id === id);
    this.archieves.push(record?.title);

    if (index !== -1) {
      this.records.splice(index, 1);
    }
  }

  constructor() {}
}
