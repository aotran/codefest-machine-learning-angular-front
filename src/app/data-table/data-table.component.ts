import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-data';
import { DataPoint } from 'src/datapoint';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  datapoints = DATA;
  prediction: string = '';

  constructor(private fetchApi: FetchApiService) { }

  ngOnInit(): void {
  }

  sendData(point: DataPoint) {
    //do nothing right now
    this.fetchApi.sendData(point).subscribe(json => {
      this.prediction = JSON.stringify(json);
    });
  }

}
