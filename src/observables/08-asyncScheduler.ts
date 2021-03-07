import { asyncScheduler } from 'rxjs';

const saludar = () => console.log('hola');
const saludar2 = (name) => console.log('hola', name);

//asyncScheduler.schedule(saludar, 3000);
//asyncScheduler.schedule(saludar2, 3000, 'Damian');

const subs = asyncScheduler.schedule(
	function (state) {
		console.log('state:', state);

		this.schedule(state + 1, 1000);
	},
	3000,
	0
);

setTimeout(() => {
	subs.unsubscribe();
	console.log('se cancelo la subscripcion');
}, 8000);
