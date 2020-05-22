import { Component, OnInit,ViewEncapsulation, Inject, ViewChild,ChangeDetectionStrategy ,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment'
import {Chart, ChartPoint} from 'chart.js'

import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
declare var $: any;
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  skillForm: FormGroup;
  public formatDate:String;
  @ViewChild('pieChart') canvasRef: ElementRef;
  @ViewChild('chart') canvasRef1: ElementRef;
    constructor(private fb: FormBuilder) {
        this.createForm();
    }
    createForm(): void {
        this.skillForm = this.fb.group({
            date: [null, Validators.required]
        });
    }
    onChange(args){
      console.log("changeEvent value (from control instance) :" + args.value);
      
    }
    onBlur(args){
      console.log("BlurEvent Value :" + this.skillForm.controls.date.value);
      const momentDate = new Date(this.skillForm.controls.date.value);
      const formattedDate  = moment(momentDate).format("YYYY-MM-DD_HH:mm:ss")
      console.log(formattedDate); 
      this.formatDate=formattedDate;
     
    }
    
  title = 'ChartsApp';
  PieChart:any;
  Chart:any;
  
  
 

  ngOnInit()
  {
    
// pie chart:

         this.PieChart = new Chart(this.canvasRef.nativeElement.getContext('2d'), {type: 'line',
         data: {
          labels: ["April 1st 2020", "April 1st 2020", "August 6th 2020", "August 20th 2020"],
          
         
          datasets: [{
              
              data: [80.78, 60.78, 60.78, 40.78],
              borderColor: 
               '#3cba9f',
              fill:false
          }]
         }, 
         options: {
           responsive:false,
           maintainAspectRatio:true,
           legend: {
             display: false
           },
           scales: {
             xAxes: [{
               display: true
             }],
             yAxes: [{
               display: true
             }]
           }
          }
  });
  this.Chart = new Chart(this.canvasRef1.nativeElement.getContext('2d'), {type: 'line',
         data: {
          labels: ["April 1st 2020", "April 1st 2020", "August 6th 2020", "August 20th 2020"],
          
         
          datasets: [{
              
              data: [60.78, 40.78, 50.78, 30.78],
              borderColor: 
               '#3cba9f',
              fill:false
          }]
         }, 
         options: {
           responsive:false,
           maintainAspectRatio:true,
           legend: {
             display: false
           },
           scales: {
             xAxes: [{
               display: true
             }],
             yAxes: [{
               display: true
             }]
           }
          }
  });
  





  
  }
}
