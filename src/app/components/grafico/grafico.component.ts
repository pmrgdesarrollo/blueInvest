import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styles: []
})
export class GraficoComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: '',
        align: '',
      }
    }
  };

 @Input() ChartLabels = ['2016', '2017', '2018'];
 @Input() ChartType: ChartType = 'bar';
 @Input() ChartLegend = true;

@Input() ChartData = [
    { data: [  ], label: '' },
    { data: [  ], label: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
