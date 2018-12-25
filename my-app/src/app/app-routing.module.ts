import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageTwoComponent } from './page-two/page-two.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-two', component: PageTwoComponent},
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
