import { Component, OnInit } from '@angular/core';
import { from, multicast, Subject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-multicaste',
  templateUrl: './multicaste.component.html',
  styleUrls: ['./multicaste.component.css']
})
export class MulticasteComponent implements OnInit {

  source$ = from([1,2,3,4]);
  subject$ = new Subject();
  multicaste$ = multicast(new Subject<number>())(this.source$.pipe(take(4)));
  subscription:Subscription = new Subscription();
  subscription1:Subscription = new Subscription();
  subscription2:Subscription = new Subscription();
  constructor() { }

  ngOnInit(): void {
    this.multicaste$.subscribe(res=>{
      console.log("ObserverA is"+res);
    })
    this.multicaste$.subscribe(res=>{
      console.log("ObserverB is"+res);
    })
    this.multicaste$.connect();
  }

}
