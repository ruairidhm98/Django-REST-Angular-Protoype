import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { CreateComponent } from './snippetsCRUD/create/create.component';
import { RetrieveComponent } from './snippetsCRUD/retrieve/retrieve.component';
import { UpdateComponent } from './snippetsCRUD/update/update.component';
import { DeleteComponent } from './snippetsCRUD/delete/delete.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    SnippetsComponent,
    CreateComponent,
    RetrieveComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
