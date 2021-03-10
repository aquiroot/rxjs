import { fromEvent, interval } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(switchMap(() => interval$)).subscribe(console.log);

//click$.pipe(mergeMap(() => interval$)).subscribe(console.log);
