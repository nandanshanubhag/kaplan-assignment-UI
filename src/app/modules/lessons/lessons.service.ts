import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { API } from 'src/app/core/api-endpoints';

import { CourseAdapter, Course } from './models/course.model';

@Injectable()
export class LessonsService {
    constructor(private http: HttpClient, private courseAdapter: CourseAdapter) {}

    public getUpcomingLessons(): Observable<Course[]> {
        return this.http.get(API.UPCOMING_COURSES).pipe(map((res: any) => res.data.map((item: any) => this.courseAdapter.adapt(item))));
    }
}
