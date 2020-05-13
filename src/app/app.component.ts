import { Component, OnInit,ViewEncapsulation, Inject, ViewChild,ChangeDetectionStrategy  } from '@angular/core';
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
    chartdata=
    {
      "dataset1" : Array(2.3,5.7,6.1)
      
    };
  title = 'ChartsApp';
  PieChart=[];
  
 

  ngOnInit()
  {
    
// pie chart:
 
  this.PieChart.push(new Chart('pieChart', {
    type: 'pie',
  data: {
   labels: ["Total", "Used", "Available"],
   
  
   datasets: [{
       
       data: this.chartdata.dataset1,
      
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
