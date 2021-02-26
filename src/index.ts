import { range } from 'rxjs';

const src$ = range(1, 20);

src$.subscribe(console.log);
