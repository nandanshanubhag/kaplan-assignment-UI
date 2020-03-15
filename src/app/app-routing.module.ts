import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ROUTE } from './enums/routes.enum';

import { UpcomingLessonsComponent } from './modules/lessons/pages/upcoming-lessons/upcoming-lessons.component';

const routes: Routes = [
    { path: '', redirectTo: ROUTE.UPCOMING_LESSONS, pathMatch: 'full' },
    {
        path: ROUTE.UPCOMING_LESSONS,
        component: UpcomingLessonsComponent
    },
    { path: '**', redirectTo: ROUTE.UPCOMING_LESSONS, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
