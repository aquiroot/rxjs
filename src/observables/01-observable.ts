import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
	next: (value) => console.log('next: ', value),
	error: (error) => console.log('error: ', error),
	complete: () => console.log('completado'),
};

const obs$ = new Observable<string>((subs) => {
	subs.next('hola');
	subs.next('hola 2');

	subs.complete();
});

obs$.subscribe(observer);
