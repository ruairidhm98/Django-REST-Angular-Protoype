import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { CreateComponent } from './snippetsCRUD/create/create.component';
import { RetrieveComponent } from './snippetsCRUD/retrieve/retrieve.component';
import { UpdateComponent } from './snippetsCRUD/update/update.component';
import { DeleteComponent } from './snippetsCRUD/delete/delete.component';
import { CreateFormComponent } from './snippetsCRUD/create/create-form/create-form.component';
import { DeleteFormComponent } from './snippetsCRUD/delete/delete-form/delete-form.component';

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
    SnippetsComponent,
    CreateComponent,
    RetrieveComponent,
    UpdateComponent,
    DeleteComponent,
    CreateFormComponent,
    DeleteFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
