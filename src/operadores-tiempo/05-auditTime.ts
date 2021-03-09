import { auditTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(auditTime(2000)).subscribe(console.log);
