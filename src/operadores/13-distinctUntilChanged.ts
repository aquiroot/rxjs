import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 3, 3, 4, 3, 4, 5, 5, 6);

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
	nombre: string;
}

const personajes: Personaje[] = [
	{ nombre: 'jose' },
	{ nombre: 'martin' },
	{ nombre: 'jose' },
	{ nombre: 'jose' },
	{ nombre: 'jhon' },
	{ nombre: 'perla' },
	{ nombre: 'jose' },
	{ nombre: 'martin' },
];

from(personajes)
	.pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
	.subscribe(console.log);
