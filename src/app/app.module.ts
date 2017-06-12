import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as NgCore from  '@angular/core';

console.log(NgCore)

import { AppComponent } from './app.component';
import { NewCmpComponent } from './feature/new-cmp/new-cmp.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    MyNewComponentComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
