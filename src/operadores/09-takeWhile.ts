import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$
	.pipe(
		map(({ x, y }) => ({ x, y })),
		takeWhile(({ y }) => y <= 150, true)
	)
	.subscribe({
		next: (val) => console.log('next:', val),
		complete: () => console.log('complete'),
	});

// el true al final del take while habilita que se imprima el ultimo valor inclusive
