import { from, of } from 'rxjs';

/**
 * of = toma argunmentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
	next: (val) => console.log('next:', val),
	complete: () => console.log('complete'),
};

const miGenerador = function* () {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

//const src$ = from([1, 2, 3, 4, 5]);
//const src$ = of(...[1, 2, 3, 4, 5]);
//const src$ = from('damian');

const src$ = from(fetch('https://api.github.com/users/aquiroot'));

//src$.subscribe(observer);

//src$.subscribe(async (resp) => {
//	console.log(resp);
//
//	const dataResp = await resp.json();
//	console.log(dataResp);
//});
