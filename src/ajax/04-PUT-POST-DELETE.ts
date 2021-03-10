import { ajax } from 'rxjs/ajax';
import { subscribeOn } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/3';

// POST Y PUT se hacen igual
//
//ajax
//	.post(
//		url,
//		{
//			id: 1,
//			nombre: 'damian',
//		},
//		{
//			'mi-token': 'asdasdasdas',
//		}
//	)
//	.subscribe(console.log);

// forma 2 de hacer lo mismo
ajax({
	url: url,
	method: 'POST',
	headers: {
		'mi-token': 'adfsdf',
	},
	body: {
		id: 1,
		nombre: 'damian',
	},
}).subscribe(console.log);
