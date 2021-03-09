import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

//range(1, 10)
//	.pipe(filter((val) => val % 2 === 1))
//	.subscribe(console.log);

range(10, 30).pipe(
	filter((val, i) => {
		console.log('index:', i);
		return val % 2 === 1;
	})
);
//.subscribe(console.log);

const personajes = [
	{
		tipo: 'heroe',
		nombre: 'batman',
	},
	{
		tipo: 'heroe',
		nombre: 'robin',
	},
	{
		tipo: 'villano',
		nombre: 'joker',
	},
];

from(personajes)
	.pipe(filter((p) => p.tipo === 'heroe'))
	.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.map( ev => ev.code),
filter (key => jey === "Enter")



keyup$.subscribe(console.log);
