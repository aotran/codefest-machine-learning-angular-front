import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-data';
import { DataPoint } from '../datapoint';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  datapoints = DATA;
  prediction?: string;
  selectedPoint?: DataPoint;

  constructor(private fetchApi: FetchApiService) { }

  ngOnInit(): void {
  }

  sendData(point: DataPoint) {
    this.selectedPoint = point;
    //conversion to object format
    let convertedPoint = {data: ''};
    convertedPoint.data += point.time + ",";
    convertedPoint.data += point.data + ",";
    convertedPoint.data += point.amount;

    //send request as JSON string
    this.fetchApi.sendData(convertedPoint).subscribe(json => {
      this.prediction = JSON.stringify(json);
    });
  }

}
