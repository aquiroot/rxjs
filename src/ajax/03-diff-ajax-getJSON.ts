import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/3';

const manejaErr = (err: AjaxError) => {
	console.warn('err', err.message);
	return of({
		ok: false,
		usuarios: [],
	});
};

const obs$ = ajax.getJSON(url);

obs$.pipe(catchError(manejaErr)).subscribe({
	next: (val) => console.log('next:', val),
	error: (err) => console.log('error:', err),
	complete: () => console.log('complete'),
});
