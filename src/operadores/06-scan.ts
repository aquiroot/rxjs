import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

// reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// redux
interface Usuario {
	id?: string;
	autenticado?: boolean;
	token?: string;
	edad?: number;
}

const user: Usuario[] = [
	{ id: '23423', autenticado: false, token: null },
	{ id: '23623', autenticado: true, token: 'adads' },
	{ id: '23523', autenticado: true, token: 'adfasd' },
];

const state$ = from(user).pipe(
	scan<Usuario>(
		(acc, cur) => {
			return { ...acc, ...cur };
		},
		{ edad: 33 }
	)
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
