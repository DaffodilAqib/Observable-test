import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  videoEmitted = new ReplaySubject<string>(5);
  constructor() { }
  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
