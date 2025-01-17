import { Component } from '@angular/core';

export interface allMeals{
  strMeal :string;
  strMealThumb:string;
  Desc:string;
  idMeal:Number
}

@Component({
  selector: 'app-intermeals',
  imports: [],
  templateUrl: './intermeals.component.html',
  styleUrl: './intermeals.component.css'
})
export class IntermealsComponent {

}
