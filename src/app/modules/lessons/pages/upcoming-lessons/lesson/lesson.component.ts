import { Component, Input } from '@angular/core';
import { Course } from '../../../models/course.model';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
    @Input() public course: Course;

    public getCourseStartTime() {
        const { courseDate, courseTime } = this.course;
        return new Date(`${courseDate} ${courseTime}`);
    }

    public getCourseEndTime() {
        const date = this.getCourseStartTime();
        date.setHours(date.getHours() + 1);
        return date;
    }
}
