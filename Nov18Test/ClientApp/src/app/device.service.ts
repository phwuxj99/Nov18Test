import {  Injectable } from '@angular/core';
//import { Post } from './post';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl: string = 'https://localhost:5001/';
  searchOption = []
  public devicesData: Devices[]
  public testStr:string[]
  GetAllUrl: string = this.apiUrl + 'devices/getalldevices';
  SearchByNameUrl: string = this.apiUrl + 'devices/SearchByName';

  constructor(private http: HttpClient, private Activatedroute: ActivatedRoute) { }


  getPosts(): Observable<Devices[]> {
    return this.http.get<Devices[]>(this.GetAllUrl);

  }


  id;
  sub;

  //projects: string[] = [];
  ////projects: Array[];
  //searchByName(name) {
  //  const params = new HttpParams().set('name', name)
  //  this.http.get<Devices[]>(this.SearchByNameUrl, { params }).subscribe(result => {
  //    //console.log(result);
  //  }, error => console.error(error));
  //}

  opts = [];
  getData() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<Devices[]>(this.GetAllUrl).pipe(tap(data => this.opts = data))
  }

  filteredListOptions() {
    let posts = this.devicesData;
    let filteredPostsList = [];
    for (let post of posts) {
      for (let options of this.searchOption) {
        if (options.title === post.deviceName) {
          filteredPostsList.push(post);
        }
      }
    }
    console.log(filteredPostsList);
    return filteredPostsList;
  }
}

interface Devices {
  deviceID: string;
  deviceName: string;
  devicesStatus: number;
  devicesCategory: string;
  deviceImageName: string;
  createdAt: string;
  deviceTemperature: number;
  deviceUsages: string;
}
