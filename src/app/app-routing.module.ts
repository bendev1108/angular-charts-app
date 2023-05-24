import { RadarComponent } from './radar/radar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

const routes: Routes = [
  {path: 'line chart', component: LineComponent},
  {path: 'bar chart', component: BarComponent},
  {path: 'bubble chart', component: BubbleComponent},
  {path: 'pie chart', component: PieComponent},
  {path: 'radar chart', component: RadarComponent},
  {path: 'doughnut chart', component: DoughnutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
