import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PortTable {
  hostname: string;
  ingressBytes: number;
  outgressBytes: number;
  ingressPackets: number;
  outgressPackets: number;
  percentage: number;
}

const portData: PortTable[] = [
  {hostname: 'snmp', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 20},
  {hostname: 'Google Services', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 20},
  {hostname: 'Facebook', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 20},
  {hostname: 'Mauritius Telecom', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 20},
  {hostname: 'Amazon', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 19.9},
  {hostname: 'General Apps', ingressBytes: 23, outgressBytes: 45, ingressPackets: 5, outgressPackets: 9, percentage: 0.1}
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['Application', 'Ingress Bytes', 'Outgress Bytes', 'Ingress Packets', 'Outgress Packets', 'Percentage Traffic'];
  dataSource = new MatTableDataSource<PortTable>(portData);

  constructor() {
  }

  ngOnInit() {
  }


  getYesterdayDate(): Date {
    const yesterdayDate = new Date(new Date().getTime());
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    return yesterdayDate;
  }

}
