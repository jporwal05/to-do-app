import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    CardComponent,
    CardListComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
