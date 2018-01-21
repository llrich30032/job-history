import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule, MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatCardModule,
    MatDialogModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
