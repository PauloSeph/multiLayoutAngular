import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ColdObComponent } from './cold-ob/cold-ob.component';
import { HotObComponent } from './hot-ob/hot-ob.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObComponent,
    HotObComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
