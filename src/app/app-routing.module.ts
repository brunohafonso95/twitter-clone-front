import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: SignupComponent },
    {path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
