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

    /**
     * @description: Get course data
     */
    private getUpcomingLessons() {
        this.lessonsService.getUpcomingLessons().subscribe(
            (courses: Course[]) => {
                this.courseGroup = this.groupCourses(courses);
            },
            err => {
                console.log('Error while getting upcoming lessons', err.message);
            }
        );
    }

    /**
     * Function to organize the courses into groups
     * @param courses : courses
     */
    private groupCourses(courses: Course[]) {
        // Group the courses on dates
        const groups = courses.reduce((group, course) => {
            const { courseDate } = course;
            if (!group[courseDate]) {
                group[courseDate] = [];
            }
            group[courseDate].push(course);
            return group;
        }, {});

        // Sort the group keys in ascending order
        const keys = Object.keys(groups).sort((a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0));

        // Create a course group array using the date and courses under the date
        return keys.map(key => {
            // Sort all the courses under each key in ascending order
            const sortedCourses = groups[key].sort((course1: Course, course2: Course) => {
                const time1 = course1.courseTime;
                const time2 = course2.courseTime;
                return time1 > time2 ? 1 : time1 < time2 ? -1 : 0;
            });

            return new CourseGroup(key, sortedCourses);
        });
    }
}
