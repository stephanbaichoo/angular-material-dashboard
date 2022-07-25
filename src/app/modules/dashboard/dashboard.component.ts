import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Traffic: number;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Google', weight: 10.7},
  { position: 2, name: 'SharePoint', weight: 9.7},
  { position: 3, name: 'AWS', weight: 8.96 },
  { position: 4, name: 'Facebook', weight: 8.4 },
  { position: 5, name: 'Wikipedia', weight: 7.8},
  { position: 6, name: 'Youtube', weight: 7.5},
  { position: 7, name: 'Yahoo.com', weight: 7.1 },
];


export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  { position: 1, name: 'Best Effort', weight:"" , symbol: '0' },
  { position: 2, name: 'Network Mgmt', weight:"" , symbol: 'CS2' },
  { position: 3, name: 'Voice', weight: "", symbol: 'EF' },
  { position: 4, name: 'Streaming VideoA', weight:"" , symbol: 'AF33' },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  bigChart2 = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.bigChart2 = this.dashboardService.bigChart2();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
