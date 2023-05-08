import { Component, Input } from '@angular/core';

@Component({
  selector: 'book',
  template: `
    <div>
      <div>Title: {{ title }}</div>
      <div>Author: {{ author }}</div>
      <div>Page Count: {{ pageCount }}</div>
      <div>Read: {{ read }}</div>
    </div>
  `,
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() title: string;
  @Input() author: string;
  @Input() pageCount: string;
  @Input() read: boolean;
}
