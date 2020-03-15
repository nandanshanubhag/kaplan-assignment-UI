import { Component, OnInit } from '@angular/core';

// Services
import { LessonsService } from '../../lessons.service';

@Component({
    selector: 'app-upcoming-lessons',
    templateUrl: './upcoming-lessons.component.html',
    styleUrls: ['./upcoming-lessons.component.scss']
})
export class UpcomingLessonsComponent implements OnInit {
    constructor(private lessonsService: LessonsService) {}

    public ngOnInit() {
        this.getUpcomingLessons();
    }

    private getUpcomingLessons() {
        this.lessonsService.getUpcomingLessons().subscribe(
            res => {
                console.log('upcoming lessons', res);
            },
            err => {
                console.log('Error while getting upcoming lessons', err.message);
            }
        );
    }
}
