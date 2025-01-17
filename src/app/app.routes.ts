import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [

    {path:'' , redirectTo:'Home' , pathMatch:'full'},
    {path: 'Home' , component: HomeComponent , title:'Home'},
    {path: 'About' , component:AboutComponent , title:'About'},
    {path: 'Meals' , component:MealsComponent ,title:'Meals'  , children:[

    {path:'' , redirectTo:'seafood' , pathMatch:'full'},
    {path:'seafood' , component:SeafoodComponent , title:'seafood'},
    {path:'pasta' , component:PastaComponent , title:'pasta'},
    {path:'breakfast' , component:BreakfastComponent , title:'breakfast'},

    ]},

    {path: 'Team' , component:TeamComponent ,title:'Team'},
    {path: 'Contact' , component:ContactComponent ,title:'Contact'},
    {path: '**' , component:NotfoundComponent ,title:'notFound'},

];
