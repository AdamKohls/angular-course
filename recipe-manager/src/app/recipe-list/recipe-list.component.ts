
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes = [
    { title: 'Spaghetti Carbonara', description: 'Klasyczne włoskie danie.' },
    { title: 'Pancakes', description: 'Puszyste naleśniki z syropem klonowym.' },
    { title: 'Tacos', description: 'Meksykańskie tacos z wołowiną i salsą.' }
  ];
}
