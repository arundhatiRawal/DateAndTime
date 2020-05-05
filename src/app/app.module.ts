import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DateTimePickerModule,
   
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
