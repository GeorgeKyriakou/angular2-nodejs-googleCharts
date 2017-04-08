import { Component } from '@angular/core';
import {GetlogService} from '../../services/getlogs.service';
import {GoogleChart} from '../../directive/chart.directive';
//import {Logs} from '../../../Logs';


@Component({
  moduleId: module.id,
  selector: 'view-logs',
  templateUrl: 'log.component.html'
})
export class LogComponent {
  public chart : GoogleChart;
  public logs: string[];
         start: string;
         end: string;



  public scatter_ChartOptions = {
         legend: {
             position: 'bottom'
         },
         title: ' '
     };

  public scatter_ChartData = [
       ['Date', ' Detected!'],
       [new Date(),0],
    ];
     //

  constructor (private getlogService:GetlogService){
        this.getlogService.getLogs()
          .subscribe(logs =>{
              this.logs = logs;

              for(let log of this.logs){
                 this.scatter_ChartData.push([new Date(parseInt(log.substring(0, 4)),
                                                       parseInt(log.substring(5, 7)),
                                                       parseInt(log.substring(8, 10)),
                                                       parseInt(log.substring(11, 13)),
                                                       parseInt(log.substring(14, 16)),
                                                       parseInt(log.substring(17, 19))),10]);
              }

          });
  }



  getSomeLogs(start, end){
    event.preventDefault();
    var selected={
      start: this.start,
      end: this.end
    }
    this.getlogService.getSomeLogs(selected)
      .subscribe(logs =>{
        this.logs = logs;
        this.scatter_ChartData = [
          ['Date', ' Detected!'],
          ];
          if (this.logs.length===0){
            this.scatter_ChartData = [
              ['Date', ' Detected!'],
              [new Date(),0]];
          }
        for(let log of this.logs){
           this.scatter_ChartData.push([new Date(parseInt(log.substring(0, 4)),
                                                 parseInt(log.substring(5, 7)),
                                                 parseInt(log.substring(8, 10)),
                                                 parseInt(log.substring(11, 13)),
                                                 parseInt(log.substring(14, 16)),
                                                 parseInt(log.substring(17, 19))),10],);
                                               }

      });
    }

  }
