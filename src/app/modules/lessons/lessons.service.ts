import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/core/api-endpoints';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LessonsService {
    constructor(private http: HttpClient) {}

    public getUpcomingLessons(): Observable<any> {
        return this.http.get(API.UPCOMING_COURSES).pipe(map((res: any) => res.data));
    }
}
