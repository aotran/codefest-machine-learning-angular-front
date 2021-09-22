import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-parse-api',
  templateUrl: './parse-api.component.html',
  styleUrls: ['./parse-api.component.css']
})
export class ParseApiComponent implements OnInit {

  //TODO: create an interface that maps to the exported models, then add as Model[] class variable here
  json: string = '';

  constructor(private fetchApi: FetchApiService) { }

  ngOnInit(): void {
    this.fetchApi.getData().subscribe(json => this.json = JSON.stringify(json))
    //JSON.parse(this.json, )
  }

}
