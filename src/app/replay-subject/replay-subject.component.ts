import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../appService/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {
  user1List = [
    "Angular-1",
    "Angular-2"
  ];
  user2List = [
    "Html-4",
    "Html-5"
  ];
  user3List = [
    "Bootstrap-4",
    "Bootstrap-5"
  ];
  subScription2 = new Subscription();
  subScription3 = new Subscription();
  user2Subscription = false;
  user3Subscription = false;
  constructor(public _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.videoEmitted.subscribe(response=>{
      console.log(response);
      this.user1List.push(response);
    })
  }
  onVideoAdd(item:any){
    this._du.videoEmitted.next(item);
  }
  onSubscribe1(){
    if(this.user2Subscription){
      this.user2Subscription = !this.user2Subscription;
      this.subScription2.unsubscribe();  
    }else{
      this.user2Subscription = !this.user2Subscription;
      this.subScription2 = this._du.videoEmitted.subscribe(res=>{
        this.user2List.push(res);
      })
    }
  }
  onSubscribe2(){
    if(this.user3Subscription){
      this.user3Subscription = !this.user3Subscription;
      this.subScription3.unsubscribe();  
    }else{
      this.user3Subscription = !this.user3Subscription;
      this.subScription3 = this._du.videoEmitted.subscribe(res=>{
        this.user3List.push(res);
      })
    }
  }

}
