import { CreateComponent } from './snippetsCRUD/create/create.component';
import { RetrieveComponent } from './snippetsCRUD/retrieve/retrieve.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './snippetsCRUD/update/update.component';
import { DeleteComponent } from './snippetsCRUD/delete/delete.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent, pathMatch: 'full'},
  { path: 'retrieve', component: RetrieveComponent, pathMatch: 'full' },
  { path: 'update', component: UpdateComponent, pathMatch: 'full'},
  { path: 'delete', component: DeleteComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/retrieve', pathMatch: 'full'},
  { path: '**', redirectTo: '/retrieve', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
