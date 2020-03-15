import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LessonComponent } from './pages/upcoming-lessons/lesson/lesson.component';
import { UpcomingLessonsComponent } from './pages/upcoming-lessons/upcoming-lessons.component';

@NgModule({
    declarations: [UpcomingLessonsComponent, LessonComponent],
    imports: [CommonModule]
})
export class LessonsModule {}
