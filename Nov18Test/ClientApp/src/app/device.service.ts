import {  Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  RelatedDeviceUrl: string = this.apiUrl + 'devices/SearchRelatedByID';

  constructor(private http: HttpClient, private Activatedroute: ActivatedRoute) { }


  getPosts(): Observable<Devices[]> {
    return this.http.get<Devices[]>(this.GetAllUrl);

  }

  getRelated(id): Observable<Devices[]> {
    const params = new HttpParams().set('id', id)
    return this.http.get<Devices[]>(this.RelatedDeviceUrl, { params });
  }

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
