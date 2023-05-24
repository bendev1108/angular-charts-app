import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit{
  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private doughnutTitle: Title){}

  ngOnInit(): void {
    this.doughnutTitle.setTitle('Doughnut Chart')
  }
}
