import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
	.pipe(
		tap((x) => console.log('antes:', x)),
		map((val) => val * 10),
		tap((val) => console.log('despues:', val))
	)
	.subscribe((val) => console.log('subs:', val));
