import { RetrieveComponent } from './snippetsCRUD/retrieve/retrieve.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'retrieve', component: RetrieveComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/retrieve', pathMatch: 'full'},
  { path: '**', redirectTo: '/retrieve', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
