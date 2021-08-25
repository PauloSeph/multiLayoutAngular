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
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { UnsubscribeComponent } from './components/unsubscribe/unsubscribe.component';
import { QualquerComponent } from './components/qualquer/qualquer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    OpTransformComponent,
    FilteringComponent,
    Filteringpt2Component,
    PipeAsyncComponent,
    AsyncComponent,
    ErrorHandlingComponent,
    DragAndDropComponent,
    UnsubscribeComponent,
    QualquerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
