import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

  obs$ = new BehaviorSubject(0);
  constructor() { }

  ngOnInit(): void {
    this.obs$.subscribe(res=>{
      console.log("ObserverA is "+res);
    })
    this.obs$.next(1);
    this.obs$.next(2);
    this.obs$.subscribe(res=>{
      console.log("ObserverB is "+res);
    })
    this.obs$.next(3);
  }

}
