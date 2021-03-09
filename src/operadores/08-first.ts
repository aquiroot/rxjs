import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$
	.pipe(
		tap(console.log),
		first<MouseEvent>((ev) => ev.clientY >= 150)
	)
	.subscribe({
		next: (val) => console.log('next:', val),
		complete: () => console.log('complete'),
	});
