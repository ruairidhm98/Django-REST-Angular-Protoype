import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    BreadcrumbComponent,
    DropDownComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
