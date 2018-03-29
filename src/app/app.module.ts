import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// Charts
import { ChartsModule } from 'ng2-charts';

// My Components
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
