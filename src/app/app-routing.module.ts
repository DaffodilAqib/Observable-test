import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatComponent } from './concat/concat.component';

import { IntervalComponent } from './interval/interval.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuardGuard } from './login-guard.guard';
import { MerrageComponent } from './merrage/merrage.component';
import { OperatorsComponent } from './operators/operators.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './subject-comp/behavior-subject/behavior-subject.component';
import { MulticasteComponent } from './subject-comp/multicaste/multicaste.component';
import { ReferenceCountComponent } from './subject-comp/reference-count/reference-count.component';
import { SimpleComponent } from './subject-comp/simple/simple.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path:"login-form",component:LoginFormComponent},
  {path:"",redirectTo:"login-form", pathMatch:'full'},
  {path:"login-form/operators/Subject",component:SubjectComponent},
  {path:"login-form/operators",canActivate:[LoginGuardGuard],component:OperatorsComponent},
  {path:'login-form/operators/ofFrom',component:OperatorsComponent},
  {path:"login-form/operators/concat",component:ConcatComponent},
  {path:"login-form/operators/merrage",component:MerrageComponent},
  {path:"login-form/operators/Subject/simple",component:SimpleComponent},
  {path:"login-form/operators/Subject/multicaste",component:MulticasteComponent},
  {path:"login-form/operators/Subject/referenceCount",component:ReferenceCountComponent},
  {path:"login-form/operators/Subject/behavior-subject",component:BehaviorSubjectComponent},
  {path:"login-form/operators/Subject/replay-subject",component:ReplaySubjectComponent},
  {path:"login-form/operators/interval",component:IntervalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
