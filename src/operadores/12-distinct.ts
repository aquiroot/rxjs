import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 3, 3, 4, 3, 4, 5, 5, 6);

numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
	nombre: string;
}

const personajes: Personaje[] = [
	{ nombre: 'jose' },
	{ nombre: 'martin' },
	{ nombre: 'jose' },
	{ nombre: 'karen' },
	{ nombre: 'jhon' },
	{ nombre: 'perla' },
	{ nombre: 'jose' },
	{ nombre: 'martin' },
];

from(personajes)
	.pipe(distinct((p) => p.nombre))
	.subscribe(console.log);
