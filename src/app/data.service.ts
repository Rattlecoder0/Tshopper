import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  filterType = new Subject<any>();

  setData(data: any) {
    this.filterType.next(data);
  }

  getData() {
    return this.filterType.asObservable();
  }

}
