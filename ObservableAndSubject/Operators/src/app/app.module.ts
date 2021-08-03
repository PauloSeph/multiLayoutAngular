import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { OpTransformComponent } from './components/op-transform/op-transform.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { FormsModule } from '@angular/forms';
import { Filteringpt2Component } from './components/filteringpt2/filteringpt2.component';
import { PipeAsyncComponent } from './components/pipe-async/pipe-async.component';
import { AsyncComponent } from './components/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    OpTransformComponent,
    FilteringComponent,
    Filteringpt2Component,
    PipeAsyncComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
