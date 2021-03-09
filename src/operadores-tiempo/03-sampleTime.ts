import { sampleTime, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
	.pipe(
		sampleTime(3000),
		map(({ x, y }) => ({ x, y }))
	)
	.subscribe(console.log);
