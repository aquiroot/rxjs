import { asyncScheduler, range } from 'rxjs';

const src$ = range(1, 20, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');

// el asyncScheduler vuelve asincrono el proceso range
