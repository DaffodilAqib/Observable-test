import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { IntervalComponent } from './interval/interval.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { SimpleComponent } from './subject-comp/simple/simple.component';
import { MulticasteComponent } from './subject-comp/multicaste/multicaste.component';
import { ReferenceCountComponent } from './subject-comp/reference-count/reference-count.component';
import { BehaviorSubjectComponent } from './subject-comp/behavior-subject/behavior-subject.component';
import { ConcatComponent } from './concat/concat.component';
import { MerrageComponent } from './merrage/merrage.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { OFFromComponent } from './o-f-from/o-f-from.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    IntervalComponent,
    ReplaySubjectComponent,
    SubjectComponent,
    SimpleComponent,
    MulticasteComponent,
    ReferenceCountComponent,
    BehaviorSubjectComponent,
    ConcatComponent,
    MerrageComponent,
    LoginFormComponent,
    OFFromComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
