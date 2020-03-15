import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LessonComponent } from './pages/upcoming-lessons/lesson/lesson.component';
import { UpcomingLessonsComponent } from './pages/upcoming-lessons/upcoming-lessons.component';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';

// Services
import { LessonsService } from './lessons.service';

@NgModule({
    declarations: [UpcomingLessonsComponent, LessonComponent, DefaultImageDirective],
    imports: [CommonModule],
    providers: [LessonsService]
})
export class LessonsModule {}
