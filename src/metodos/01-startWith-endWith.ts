import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

const numeros$ = of(1, 2, 3).pipe(startWith('Start'), endWith('finish'));

numeros$.subscribe(console.log);
