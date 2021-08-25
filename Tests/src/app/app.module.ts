import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { PainelComponent } from './painel/painel.component';
import { TestHostListenerDirective } from './test-host-listener.directive';
import { FormTestComponent } from './testForm/form-test/form-test.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProgressoComponent,
    PainelComponent,
    TestHostListenerDirective,
    FormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
