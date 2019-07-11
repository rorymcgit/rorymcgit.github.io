import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from 'src/app/shared/app.state';
import { ShowValueComponent } from './show-value/show-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      AppState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
