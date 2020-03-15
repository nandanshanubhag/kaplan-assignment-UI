import { Component, OnInit } from '@angular/core';

// Services
import { LessonsService } from '../../lessons.service';

// Models
import { Course } from '../../models/course.model';
import { CourseGroup } from '../../models/course-group.model';

@Component({
    selector: 'app-upcoming-lessons',
    templateUrl: './upcoming-lessons.component.html',
    styleUrls: ['./upcoming-lessons.component.scss']
})
export class UpcomingLessonsComponent implements OnInit {
    public courseGroup: CourseGroup[] = [];

    constructor(private lessonsService: LessonsService) {}

    public ngOnInit() {
        this.getUpcomingLessons();
    }

    private getUpcomingLessons() {
        this.lessonsService.getUpcomingLessons().subscribe(
            (res: Course[]) => {
                console.log('upcoming lessons', res);

                const groups = res.reduce((group, course) => {
                    const { courseDate } = course;
                    if (!group[courseDate]) {
                        group[courseDate] = [];
                    }
                    group[courseDate].push(course);
                    return group;
                }, {});

                // Sort the group keys in ascending order
                const keys = Object.keys(groups).sort((a: any, b: any) =>
                    a > b ? 1 : a < b ? -1 : 0
                );

                this.courseGroup = keys.map(key => {
                    // Sort all the courses under each key in ascending order
                    const courses = groups[key].sort((course1: Course, course2: Course) => {
                        const time1 = course1.courseTime;
                        const time2 = course2.courseTime;
                        return time1 > time2 ? 1 : time1 < time2 ? -1 : 0;
                    });

                    return new CourseGroup(key, courses);
                });
                console.log('course group', this.courseGroup);
            },
            err => {
                console.log('Error while getting upcoming lessons', err.message);
            }
        );
    }

    private formatCourseData() {}
}
