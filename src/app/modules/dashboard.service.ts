import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: '443',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: '80',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: '23',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: '22',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: '25',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  bigChart2() {
    return [{
      name: 'Google',
      data: [10000, 40000, 50000, 2000, 5450, 7861, 2476]
    }, {
      name: 'SharePoint',
      data: [457, 543, 786, 3456, 725, 458, 1325]
    }, {
      name: 'AWS',
      data: [4567, 324, 4537, 1535, 2137, 4537, 3415]
    }, {
      name: 'Wikipedia',
      data: [7864, 1357, 4348, 3243, 2456, 2748, 8373]
    }, {
      name: 'Youtube',
      data: [2135, 5373, 733, 1387, 2137, 3147, 7372]
    }];
  }
  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'UDP',
      y: 42.41,
      sliced: true,
      selected: true
    }, {
      name: 'TCP',
      y: 50.84
    },
    ];
  }
}
