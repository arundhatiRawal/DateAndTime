import { Component, OnInit } from '@angular/core';
import {Chart, ChartPoint} from 'chart.js'
@Component({
  selector: 'app-root',
  template: `<ejs-datetimepicker format='yyyy-MM-dd HH:MM' placeholder='Enter date'
  [value]=dateValue></ejs-datepicker>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public minDate: Date = new Date ("05/07/2017 2:00 AM");
    public maxDate: Date = new Date ("05/27/2017 11:00 AM");
    public dateValue: Date = new Date ("05/16/2017 5:00 AM");
    public dateValue2: Date = new Date ("05/16/2017 5:00 AM");
    
    public date:Date=new Date("2017.05.20 05:30")
    constructor () {}
  title = 'ChartsApp';
  PieChart=[];
  
 

  ngOnInit()
  {

// pie chart:
   console.log(this.dateValue);

  this.PieChart.push(new Chart('pieChart', {
    type: 'pie',
  data: {
   labels: ["Total", "Used", "Available"],
   datasets: [{
       
       data: [2.1 ,6.8, 1.3],
       backgroundColor: [
        "#3cb371",  
        "#0000FF",  
        "#9966FF",  
           
       ],
       borderColor: [
        '#3cba9f'
           
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Distribution of memory in GB",
       display:true
   },
   
  }
  }));
  





  
  }
}
