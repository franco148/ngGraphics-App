import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



// Charts
import { ChartsModule } from 'ng2-charts';

// My Components
import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { RadarComponent } from './components/radar/radar.component';
import { PieComponent } from './components/pie/pie.component';
import { PolarAreaComponent } from './components/polar-area/polar-area.component';


@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    PieComponent,
    PolarAreaComponent
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
