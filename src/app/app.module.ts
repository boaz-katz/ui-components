import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChildComponent } from './ng-content/child/child.component';
import { ParentComponent } from './ng-content/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
  
    ChildComponent,
       ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
