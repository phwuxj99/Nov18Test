import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: Devices[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    console.log('SearchTest:' + searchText);
    searchText = searchText.toLocaleLowerCase();

    for (let item of items) {
      if (item.deviceName.includes(searchText)) {
        console.log(item.deviceName);
      }
    }      

    console.log('item:' + items.length);
    return items.filter(it => {
      return it.deviceName.toLocaleLowerCase().includes(searchText);
    });
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
