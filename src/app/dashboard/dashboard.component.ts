import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public ngOnInit(): void {
      this.createCharts();
  }

  private createCharts(){
    this.chartline();
    this.chartcolumn();
    this.chartpie();
    this.chartarea();
  }

  private chartline(){
    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Monthly Sales'
      },
      subtitle: {
        text: 'Source: Sales Department'
      },
      credits:{
        enabled:false,
      },
      xAxis:{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true        
      },
      yAxis: {
        title: { 
          text: 'Sales ($)' 
        }
      },
      tooltip: {
        shared: true
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [{
        name: '2023',
        data: [12000, 15000, 20000, 22000, 25000, 27000, 30000, 26000, 35000, 56000, 50000, 59000]
      }, {
        name: '2022',
        data: [11000, 14000, 18000, 21000, 23000, 25000, 28000, 24000, 32000, 51000, 46000, 55000]
      }, {
        name: 'Target',
        data: [13000, 16000, 21000, 23000, 26000, 28000, 31000, 27000, 36000, 57000, 51000, 60000],
        dashStyle: 'shortdot'
      }] as any
    })
  }

  private chartcolumn(){
    const chart = Highcharts.chart('chart-column', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Product Performance'
      },
      subtitle: {
        text: 'Comparison by Quarter'
      },
      credits:{
        enabled:false,
      },
      xAxis: { 
        categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E']
      },
      yAxis: { 
        min: 0,
        title: { 
          text: 'Units Sold' 
        } 
      },
      series: [{
        name: 'Q1',
        data: [1000, 1200, 800, 1500, 900]
      }, {
        name: 'Q2',
        data: [1200, 1300, 1000, 1700, 1100]
      }] as any
    })
  }
  

  private chartpie(){
    const chart = Highcharts.chart('chart-pie', {
      chart: { 
        type: 'pie'
      },
      title: { 
        text: 'Sales by Region' 
      },
      series: [{
        name: 'Sales',
        data: [
          { name: 'North', y: 30 },
          { name: 'South', y: 25 },
          { name: 'East', y: 22 },
          { name: 'West', y: 23 }
        ]
      }] as any
    })
  }

  private chartarea(){
    const chart = Highcharts.chart('chart-area', {
      chart: {
        type: 'area' 
    },
      title: {
        text: 'Customer Growth' 
    },
    subtitle: {
      text: 'Source: Customer Relations Department'
    },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        
      },
      yAxis: { 
        title: { 
        text: 'Number of Customers' 
    }, 
    },
    
      series: [{
        name: 'New Customers',
        data: [100, 120, 130, 140, 160, 180, 200, 220, 240, 260, 280, 300]
      }, {
        name: 'Total Customers',
        data: [1000, 1120, 1250, 1390, 1550, 1730, 1930, 2150, 2390, 2650, 2930, 3230]
      }] as any
    })
  }


}
