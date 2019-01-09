import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './snippetsCRUD/create/create.component';
import { RetrieveComponent } from './snippetsCRUD/retrieve/retrieve.component';
import { UpdateComponent } from './snippetsCRUD/update/update.component';
import { DeleteComponent } from './snippetsCRUD/delete/delete.component';
import { CreateFormComponent } from './snippetsCRUD/create/create-form/create-form.component';
import { DeleteFormComponent } from './snippetsCRUD/delete/delete-form/delete-form.component';
import { UpdateFormComponent } from './snippetsCRUD/update/update-form/update-form.component';
import { RetrieveFormComponent } from './snippetsCRUD/retrieve/retrieve-form/retrieve-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CreateComponent,
    RetrieveComponent,
    UpdateComponent,
    DeleteComponent,
    CreateFormComponent,
    DeleteFormComponent,
    UpdateFormComponent,
    RetrieveFormComponent,
    MenuComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
