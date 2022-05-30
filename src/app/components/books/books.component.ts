import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

	constructor(
		private booksService: BooksService
	) { }

	ngOnInit(): void {
		console.log(this.booksService.getAllBooks()[0]);
	};

	allBooks: any[] = this.booksService.getAllBooks();
	allBooksTableHeadings: string[] = ['Price', 'Author', 'Country', 'Image', 'Language', 'Link', 'Pages', 'Title', 'Year'];

	randomNum() {
		return Math.ceil(Math.random() * 1000);
	}

}
