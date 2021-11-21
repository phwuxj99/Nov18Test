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

  public searchText = '';
  constructor(private dataService: DataService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.devices = posts;
    });

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

    return this.msg;
  }
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

