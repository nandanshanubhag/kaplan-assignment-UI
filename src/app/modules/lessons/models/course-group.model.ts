import { Course } from './course.model';

export class CourseGroup {
    constructor(public date: string = '', public courses: Course[] = []) {}
}
