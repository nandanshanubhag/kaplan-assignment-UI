import { Injectable } from '@angular/core';
import { Adapter } from './adapter.model';

export class Course {
    constructor(
        public courseTitle: string,
        public courseDescription: string,
        public courseInstructorName: string,
        public courseInstructorThumbnailUrl: string,
        public courseSubjectThumbnailUrl: string,
        public courseDate: string,
        public courseTime: string
    ) {}
}

@Injectable()
export class CourseAdapter implements Adapter<Course> {
    public adapt(item: any): Course {
        const [date, time] = item.time.split(' ');
        return new Course(
            item.title,
            item.description,
            item.instructorName,
            item.instructorPhotoUrl,
            item.subjectPhotoUrl,
            date,
            time
        );
    }
}
