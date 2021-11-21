import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-details-component',
  templateUrl: './details.component.html'
})



export class DetailsComponent {

  public devices: Devices;
  public devicesstatus: devicesstatus;


  id;
  sub;


  constructor(private Activatedroute: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private router: Router) {

    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    });

    const params = new HttpParams().set('deviceID', this.id)
    //console.log(params);
    http.get<Devices>(baseUrl + 'devices/GetDeviceDetails', { params }).subscribe(result => {
      console.log(result);


      this.devices = result;
      //const x = this.devices[0].devicesStatus;
      //console.log(devicesstatus[x]);
    }, error => console.error(error));
  }

  ngOnInit() {

    // This params is deprecated

    //this.sub=this._Activatedroute.params.subscribe(params => { 
    //    this.id = params['id']; 
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);    
    //
    //});
  }


  public currentCount = 0;
  public incrementCounter() {
    this.currentCount++;
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
