import { Component, OnInit } from '@angular/core';
import { interval, multicast, refCount, Subject, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-reference-count',
  templateUrl: './reference-count.component.html',
  styleUrls: ['./reference-count.component.css']
})
export class ReferenceCountComponent implements OnInit {

  // multicaste$ = multicast(new Subject<number>())(interval(1000));
  source$ = interval(500);
  subject$ = new Subject<number>();
  multicaste$ =this.source$.pipe(multicast(this.subject$),refCount()) 
  subscription1:Subscription = new Subscription();
  subscription2:Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription1 = this.multicaste$.subscribe(res=>{
      console.log("ObserverA is "+res);
    })
    setTimeout(()=>{
      this.subscription2 = this.multicaste$.subscribe(res=>{
        console.log("ObserverB is "+res);
      })
    },600);
    setTimeout(()=>{
      this.subscription1.unsubscribe();
    },2000);
    setTimeout(()=>{
      this.subscription2.unsubscribe();
    },1200);
  }

}
