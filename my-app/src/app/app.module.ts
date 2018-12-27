import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { CreateComponent } from './create/create.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
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
