import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-domaci-9';

	text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et finibus nisi.";
	today: number = Date.now();
}
