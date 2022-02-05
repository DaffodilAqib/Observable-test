import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { concat, interval, map, Observable, of, Subscription, take } from 'rxjs';
import { DesignUtilityService } from '../appService/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit, OnChanges ,AfterViewInit{
  techChannelSubscribe =false;
  comedyChannelSubscribe =false;
  newsChannelSubscribe =false;
  
  techSubscription = new Subscription();
  comedySubscription = new Subscription();
  newsSubscription = new Subscription();
  finalObs$ = new Observable();
  

  obs1$ = new Observable();
  obs2$ = new Observable();
  obs3$ = new Observable();
  constructor(private _du:DesignUtilityService) { }


  ngOnInit(): void {
    
    console.log("on Init");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
    
  }
  ngAfterViewInit(): void {
    console.log("After View");
  }
  onTechSubscribe(){
    console.log("tech Channal");
    if(this.techChannelSubscribe){
      console.log("unsubscribe");
      this.techSubscription.unsubscribe();
      this.obs1$ = of();
    }else{
      this.obs1$ = interval(1000).pipe(map(v=> "Teach Video # "+ (v+1)),take(5))
      console.log(this.obs1$);
    }
    this.techChannelSubscribe = !this.techChannelSubscribe;
    this.forFinalObser();
  }
  onComedySubscribe(){
    console.log("Comedy Channal");
    if(this.comedyChannelSubscribe){
      console.log("unsubscribe");
      this.comedySubscription.unsubscribe();
      this.obs2$ = of();

    }
    else{
      this.obs2$ = interval(1000).pipe(map(v=> "Comedy Video # "+ (v+1)),take(3));

      
    }
    this.comedyChannelSubscribe = !this.comedyChannelSubscribe;
    this.forFinalObser();
  }
  onNewsSubscribe(){
    console.log("News Channal");
    if(this.newsChannelSubscribe){
      console.log("unsubscribe");
      this.newsSubscription.unsubscribe();
      this.obs3$ = of();
    }
    else{
      this.obs3$ = interval(1000).pipe(map(v=> "News Video # "+ (v+1)),take(4));
      
    }
    this.newsChannelSubscribe = !this.newsChannelSubscribe;
    this.forFinalObser();
    
  }
  forFinalObser(){
    const obj:any = document.getElementById("concat-video-list");
    obj.innerHTML = "";
    this.finalObs$ = concat(this.obs1$,this.obs2$,this.obs3$);
      this.finalObs$.subscribe(observer=>{
      this._du.print(observer,"concat-video-list")
    })
  }

}
