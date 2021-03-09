import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clicksBtn$ = fromEvent<MouseEvent>(boton, 'click');

counter$.pipe(takeUntil(clicksBtn$)).subscribe({
	next: (val) => console.log('next:', val),
	complete: () => console.log('complete'),
});
