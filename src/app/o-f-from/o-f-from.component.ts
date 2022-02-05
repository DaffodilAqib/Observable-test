import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-o-f-from',
  templateUrl: './o-f-from.component.html',
  styleUrls: ['./o-f-from.component.css']
})
export class OFFromComponent implements OnInit {

  constructor() { }
  obs1$ = of("Mohd Aqib Khan","Ram","Harsh");
  obs2$ = from(["Mohd Aqib", "Harsh","Ram"]);
  ngOnInit(): void {
    console.log("Ex -01: of() ");
    this.obs1$.subscribe(res=>{
      console.log(res);
    });
    console.log("Ex -02: from()");
    this.obs2$.subscribe(res=>{
      console.log(res);
    })
  }

}
