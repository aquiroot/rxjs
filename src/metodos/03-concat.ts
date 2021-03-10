import { interval } from 'rxjs';
import { concat } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(3))).subscribe(console.log);
