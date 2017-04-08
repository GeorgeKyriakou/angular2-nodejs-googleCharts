import {Directive, ElementRef, Input, OnInit} from '@angular/core';
//import {LogComponent} from '../components/log/log.component';
declare var google: any;
declare var googleLoaded: any;
declare var googleChartsPackagesToLoad: any;

@Directive({

    selector: '[GoogleChart]',

})

export class GoogleChart implements OnInit{
  public _element:any;
  //public logs :LogComponent;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;

  public selected: Object;


  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }

  ngOnInit() {
    if(!googleLoaded) {
      googleLoaded = true;
    google.charts.load('current', {'packages':['corechart', 'bar']});
     }
     //var data = new google.visualization.DataTable();
    setInterval(() =>this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element),1000);

  }




  drawGraph (chartOptions,chartType,chartData,ele) {

        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var wrapper;
          wrapper = new google.visualization.ChartWrapper({
              chartType: chartType,
              dataTable:chartData ,
              options:chartOptions || {}
            });
          wrapper.draw(ele);
        }
    }
 }
