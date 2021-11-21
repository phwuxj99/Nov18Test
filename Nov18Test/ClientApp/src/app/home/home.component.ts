import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
/*import { HttpClient } from '@angular/common/http';*/
import { DataService } from '../device.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public devices: Devices[];
  public devicesstatus: devicesstatus;
  public options: string[];// = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  msg: string;

  public searchFilter: any = '';
  public searchText = '';
  constructor(private dataService: DataService, private snackBar: MatSnackBar) {
    ////http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //http.get<Devices[]>(baseUrl + 'devices/getalldevices').subscribe(result => {
    //  //console.log(result);

    //console.log(this.devices);
    //  this.devices = result;
    //  //this.devices.forEach(function (value) {
    //  //  this.options.push(value.deviceName)
    //  //  console.log(value);
    //  //});
    //  //result.forEach((currentValue, index) => {
    //  //  console.log(currentValue.deviceName);
    //  //  this.options.push(currentValue.deviceName);
    //  //});

    //  //console.log(this.options);
    //  //this.myArray.forEach((currentValue, index) => {
    //  //  if (!currentValue.name) {
    //  //    this.myArray.splice(index, 1);
    //  //  }
    //  //});
    //  //angular.forEach(values, function (value, key) {
    //  //  $scope.names.push(value.name);
    //  //});
    //  //const x = this.devices[0].devicesStatus;
    //  //console.log(devicesstatus[x]);
    //}, error => console.error(error));
  }

  ngOnInit() {
    //let deviceName: Array<string>;
    /*const device = [];*/
    this.dataService.getPosts().subscribe(posts => {
      this.devices = posts;
      //this.dataService.devicesData = posts;
      //console.log(posts);
      //posts.forEach(function (value) {
      //  //this.options.push(value.deviceName);
      //  //console.log(value.deviceName);
      //});
      //console.log(this.options);
      //this.options = device;
    });

    //this.filteredOptions = this.myControl.valueChanges.pipe(
    //  startWith(''),
    //  map(value => this._filter(value)),
    //);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        switchMap(val => {
          return this._filter(val || '')
        })
      );

  }

  public displayStatus(statusNum) {
    return devicesstatus[statusNum];
  }

  //// filter and return the values
  //_filter(val: string): Observable<any[]> {
  //  // call the service which makes the http-request
  //  return this.dataService.searchByName(val.toLowerCase())
  //    .pipe(
  //      map(response => response.filter(option => {
  //        return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
  //      }))
  //    )
  //}

  // filter and return the values
  _filter(val: string): Observable<string[]> {
    // call the service which makes the http-request    
    return this.dataService.getData()
      .pipe(
        map(response => response.filter(option => {
          return option.deviceName.toLowerCase().indexOf(val.toLowerCase()) === 0
        }))
      );
  }


  private openSnackBar(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  public onSelectState(value: string): void {
    this.openSnackBar(`State abbreviation selected: ${value}`)
  }

  searchEvent(name) {
    this.msg = 'Button is Clicked: ' + name.value;

    //this.devices = this.dataService.searchByName(name.valur);
    return this.msg;
  }
  //_filter(val: string): string[] {
  //  this.options = [];
  //  const filterValue = val.toLowerCase();
  //  //console.log('1');
  //  //console.log(this.dataService.getAllName());
  //  ////console.log( Array.isArray(this.dataService.getAllName()));
  //  //if (!this.options.length) {
  //    this.options = this.dataService.getAllName();
  //  //}
  //  console.log('2');
  //  console.log(this.options);
  //  console.log('3');
  //  //for (var i = 0; i < this.options.length; i++) {
  //  //  console.log(this.options[i]); // output: Apple Orange Banana
  //  //  //for (var j = 0; j < this.options[i].length; j++) {
  //  //  //  console.log(this.options[i][j]); // output: Apple Orange Banana
  //  //  //}
  //  //}

  //  console.log('3end');
  //  // this.dataService.getPosts()
  //  //  .pipe(
  //  //    map(response => response.forEach(function (device) { this.devices.push(device); this.options.push(device.deviceName); console.log('test:'+device.deviceName); }))
  //  //);
  //  //console.log(this.options);
  //  // this.devices.forEach(function (value) {
  //  //   this.options.push(value.deviceName);
  //  //  console.log(value);
  //  //});

  //  //this.options = ['One', 'Two', 'Three'];
  //  return this.options.filter(option => option.toString().toLowerCase().includes(filterValue));
  //}
  //private _filter(value: string): string[] {
  //  return this.dataService.getPosts()
  //    .pipe(
  //      map(response => response.filter(option => {
  //        return option.deviceName.toLowerCase().indexOf(value.toLowerCase()) === 0
  //      }))
  //    );
  //const filterValue = value.toLowerCase();

  //this.devices.forEach(function (value) {
  //  this.options.push(value.deviceName)
  //  console.log(value);
  //});

  //return this.options.filter(option => option.toLowerCase().includes(filterValue));
  //}

  clearInput(lbl) {
    console.log(lbl.id); console.log(lbl.value);
    lbl.value = '';
  }


  onSelectedFilter(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.devices = this.dataService.filteredListOptions();
    else {
      this.devices = this.dataService.devicesData;
    }

  }




  Students = [{
    "id": 1,
    "name": "Nathaniel Graham",
    "email": "nathaniel.graham@example.com"
  },
  {
    "id": 2,
    "name": "Avery Adams",
    "email": "avery.adams@example.com"
  },
  {
    "id": 3,
    "name": "Mario Stevens",
    "email": "mario.stevens@example.com"
  },
  {
    "id": 4,
    "name": "Constance Beck",
    "email": "constance.beck@example.com"
  },
  {
    "id": 5,
    "name": "Jimmie Little",
    "email": "jimmie.little@example.com"
  },
  {
    "id": 6,
    "name": "Avery Matthews",
    "email": "avery.matthews@example.com"
  },
  {
    "id": 7,
    "name": "Pat Sutton",
    "email": "pat.sutton@example.com"
  },
  {
    "id": 8,
    "name": "Danny Crawford",
    "email": "danny.crawford@example.com"
  },
  {
    "id": 9,
    "name": "Pearl Mccoy",
    "email": "pearl.mccoy@example.com"
  },
  {
    "id": 10,
    "name": "Flenn Wallace",
    "email": "flenn.wallace@example.com"
  }
  ]

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

