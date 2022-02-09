import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './graficoDona.component.html',
  styleUrls: ['./graficoDona.component.css']
})
export class GraficoDonaComponent implements OnInit {

   
 @Input('chartLabels') doughnutChartLabels: string[] = [ ];
 @Input('chartData') doughnutChartData: number[] = []; 
 @Input('chartType') doughnutChartType: string = ''
  

  constructor() { }

  ngOnInit() {
  }

}
