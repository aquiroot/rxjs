import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clicksBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
	tap(() => console.log('antes de skip')),
	skip(1),
	tap(() => console.log('despues de skip'))
);

counter$.pipe(takeUntil(clicksBtn$)).subscribe({
	next: (val) => console.log('next:', val),
	complete: () => console.log('complete'),
});
