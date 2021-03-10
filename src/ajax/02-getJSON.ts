import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/3';

const obs$ = ajax.getJSON(url);

obs$.subscribe(console.log);
