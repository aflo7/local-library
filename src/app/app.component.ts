import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Book {
  title: string;
  author: string;
  pageCount: string;
  read: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentLibrary: Book[] = [];
  title = new FormControl('');
  author = new FormControl('');
  pageCount = new FormControl('');
  read = new FormControl(false);

  display: string = 'none';

  constructor() {}

  ngOnInit(): void {
    const storedLibrary = localStorage.getItem('library');
    if (storedLibrary === null) {
      localStorage.setItem('library', '[]');
      return;
    }
    this.currentLibrary = JSON.parse(storedLibrary);
    console.log(this.currentLibrary)
  }

  addBook(book: Book) {
    this.currentLibrary.push(book);
    localStorage.setItem('library', JSON.stringify(this.currentLibrary));
  }

  showModal() {
    this.display = 'flex';
  }

  hideModal() {
    this.display = 'none';
  }

  resetFormFields() {
    this.title.setValue('');
    this.author.setValue('');
    this.pageCount.setValue('');
    this.read.setValue(false);
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    if (
      this.title.value === null ||
      this.author.value === null ||
      this.pageCount.value === null ||
      this.read.value === null
    ) {
      return;
    }

    const formBook: Book = {
      title: this.title.value,
      author: this.author.value,
      pageCount: this.pageCount.value,
      read: this.read.value,
    };
    this.addBook(formBook);
    this.resetFormFields();
  }
}
