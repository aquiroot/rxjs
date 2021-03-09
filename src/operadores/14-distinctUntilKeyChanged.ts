import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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

from(personajes).pipe(distinctUntilKeyChanged('nombre')).subscribe(console.log);
