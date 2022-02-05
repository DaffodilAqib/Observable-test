import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { AuthUserService } from '../auth-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterViewInit {

  @ViewChild('userName') userName:ElementRef | any
  constructor(private auth:AuthUserService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }
  onSubmit(){
    console.log(this.userName?.nativeElement.value);
    this.auth.user.next(this.userName.nativeElement.value);
  }

}
