import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../device.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details.component.html'
})



export class DetailsComponent {
  devices: Devices;
  devicesstatus: devicesstatus;
  relatedDevice: Devices[];
  name: string;
  status: string;
  temperature: number;

  id;
  sub;


  constructor(private dataService: DataService, private Activatedroute: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private router: Router) {

    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      /*console.log(params);*/
      this.id = params.get('id');
    });

    const params = new HttpParams().set('deviceID', this.id)
    //console.log(params);
    http.get<Devices>(baseUrl + 'devices/GetDeviceDetails', { params }).subscribe(result => {
      /*console.log(result);*/
      this.name = result.deviceName;
      this.status = this.displayStatus(result.devicesStatus);
      this.temperature = result.deviceTemperature;

      this.devices = result;
    }, error => console.error(error));


    this.dataService.getRelated(this.id).subscribe(posts => {
      this.relatedDevice = posts;
    });
  }

  ngOnInit() { }

  public displayStatus(statusNum) {
    return devicesstatus[statusNum];
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

enum devicesstatus {
  Available,
  NotAvailable,
  Online,
  Offline,
}
