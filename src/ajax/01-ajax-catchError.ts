import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

//const fetchPromise = fetch(url);
//
//const manejaErrores = (resp: Response) => {
//	if (!resp.ok) {
//		throw new Error(resp.statusText);
//	}
//	return resp;
//};
//
//fetchPromise
//	.then(manejaErrores)
//	.then((resp) => resp.json())
//	.then(console.log)
//	.catch((err) => console.warn('error:', err));

const atrapaErr = (err: AjaxError) => {
	console.warn('error:', err);
	return of([]);
};

ajax(url).pipe(pluck('response'), catchError(atrapaErr)).subscribe(console.log);
