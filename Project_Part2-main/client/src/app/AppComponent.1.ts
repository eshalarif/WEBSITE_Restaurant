import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HeaderComponent } from "./partials/header/header.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    declerations: [HeaderComponent],
    imports: [CommonModule],
})
export class AppComponent {
    title = 'RecipeBook';
}
