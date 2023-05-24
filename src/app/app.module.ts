import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { MenuChartsComponent } from './menu-charts/menu-charts.component';
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { PieComponent } from './pie/pie.component';
import { RadarComponent } from './radar/radar.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    MenuChartsComponent,
    BarComponent,
    BubbleComponent,
    PieComponent,
    RadarComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
