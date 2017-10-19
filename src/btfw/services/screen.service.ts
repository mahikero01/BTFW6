import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    largeBreakpoint = 800;
    screeenWidth = 1000;
    screenHeight = 800;

    constructor() {
        try {
            this.screeenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener('resize', (event) => this.onResize(event));
        }
        catch (e) {

        }
    }

    isLarge() : boolean {
        return this.screeenWidth >= this.largeBreakpoint;
    }

    onResize($event) : void {
        this.screeenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }
}