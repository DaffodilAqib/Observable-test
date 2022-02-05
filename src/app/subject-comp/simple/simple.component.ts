import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit{

  obs$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.obs$.subscribe(res=>{
      console.log("ObserverA"+res);
    })
    this.obs$.next(1);
    this.obs$.next(2);
    this.obs$.subscribe(res=>{
      console.log("ObserverB"+res)
    })
    this.obs$.next(3);
    
  }

}
