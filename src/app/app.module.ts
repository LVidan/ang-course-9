import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './components/books/books.component';

@NgModule({
	declarations: [
		AppComponent,
		BooksComponent
	],
	imports: [
		BrowserModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
