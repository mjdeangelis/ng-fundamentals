import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';


@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnailClick(event?.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
`
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventsService: EventsService,
                private toastr: ToastrService) {
        
    }

    ngOnInit() {
        this.eventsService.getEvents().subscribe(events => {this.events = events;})
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }

}