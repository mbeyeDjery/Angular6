import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnesComponent } from './personnes/personnes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IntroouvableComponent } from './introouvable/introouvable.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'personnes', component: PersonnesComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', component: IntroouvableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const mesRoutes = [PersonnesComponent, AccueilComponent, IntroouvableComponent];
