import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { OpTransformComponent } from './components/op-transform/op-transform.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    OpTransformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
