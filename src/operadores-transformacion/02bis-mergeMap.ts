import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, mergeMap } from 'rxjs/operators';
import { GithubUser } from '../interfaces/githubUsers.interfeaces';
// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
	orderList.innerHTML = '';

	for (const usuario of usuarios) {
		const li = document.createElement('li');
		const img = document.createElement('img');
		img.src = usuario.avatar_url;

		const anchor = document.createElement('a');
		anchor.href = usuario.html_url;
		anchor.text = 'ver pagina';
		anchor.target = '_blank';

		li.append(img);
		li.append(usuario.login + ' ');
		li.append(anchor);

		orderList.append(li);
	}
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
	debounceTime(1000),
	pluck('target', 'value'),
	mergeMap((texto) =>
		ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
	),
	pluck<any, GithubUser[]>('items')
);
//.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$
	.pipe(
		pluck('target', 'value'),
		mergeMap((text) => ajax.getJSON(url + text))
	)
	.subscribe(console.log);
