import { fromEvent } from 'rxjs';
import { subscribeOn, map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ultricies ex. Morbi feugiat sem in mi condimentum, quis tincidunt tellus maximus. Duis vel elit nisi. Mauris facilisis, metus sed commodo hendrerit, sem leo convallis urna, vitae aliquet quam urna vel lorem. Maecenas placerat in turpis quis aliquam. Donec vitae odio eu velit ornare elementum vitae vel lacus. In ut nisi lectus. Fusce orci lacus, auctor sit amet neque cursus, iaculis commodo ex. Praesent eget nisl porta, iaculis orci eget, elementum neque. Suspendisse commodo porta magna in fringilla. Suspendisse hendrerit elit ut eleifend mattis.
<br/><br/>
Suspendisse ultricies odio ut metus tincidunt, a sodales tortor pulvinar. Pellentesque elementum nisl non tempus feugiat. Sed tincidunt dolor lectus, at semper eros placerat vitae. Pellentesque eget rutrum libero. Sed fringilla laoreet sapien, et tincidunt dolor convallis nec. Curabitur pharetra nisl in ipsum tincidunt, ut mattis lorem auctor. Proin sollicitudin eros mauris, in rutrum libero pharetra non. Integer congue dui magna, luctus gravida enim maximus eget. Nulla augue lorem, facilisis a diam in, auctor vehicula magna. Nullam bibendum orci nibh, in molestie tellus molestie et. Donec pellentesque, sem sit amet vehicula dignissim, arcu leo mollis odio, vitae accumsan nibh elit quis libero.
<br/><br/>
Morbi vehicula diam a ullamcorper vulputate. Donec eget nulla semper, porta magna varius, vestibulum leo. In accumsan dictum lectus, a pretium justo sagittis eget. Ut id eros eget augue convallis consectetur. Integer tincidunt, orci et eleifend feugiat, mi ex porttitor ipsum, non ultricies urna nulla hendrerit tortor. Duis sit amet dui varius, rhoncus sapien et, fringilla ex. Nam lacinia, est ac varius eleifend, elit velit aliquam sapien, sit amet auctor urna ex sed massa.
<br/><br/>
Pellentesque laoreet metus et neque tristique, quis cursus ante pharetra. Ut imperdiet erat nec pretium luctus. Proin scelerisque ac tellus in porta. In sit amet hendrerit velit. Duis semper ex in est blandit commodo. Vestibulum consequat sodales enim, non malesuada quam condimentum vel. Nullam rhoncus nisi id arcu ultricies tempor. Aenean nec commodo felis. Sed lorem ipsum, dictum eget lorem nec, finibus blandit tellus. Donec vel orci id magna porta pharetra. Integer quis mauris in purus finibus posuere. Morbi efficitur sapien eget libero consectetur pellentesque. Phasellus fringilla finibus leo in volutpat.
<br/><br/>
Morbi congue et neque in ultricies. Etiam convallis cursus accumsan. Sed non ligula aliquet, porta ex eu, pharetra tellus. Morbi ut justo tempus, condimentum risus vitae, ultrices lectus. Donec eu pellentesque risus, nec cursus velit. Etiam ut tortor elit. Sed ullamcorper suscipit lobortis. Integer fermentum massa ac vulputate finibus. Quisque ac consequat metus. Quisque id pretium nisl. Sed feugiat augue eros, finibus feugiat nibh volutpat ac.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ultricies ex. Morbi feugiat sem in mi condimentum, quis tincidunt tellus maximus. Duis vel elit nisi. Mauris facilisis, metus sed commodo hendrerit, sem leo convallis urna, vitae aliquet quam urna vel lorem. Maecenas placerat in turpis quis aliquam. Donec vitae odio eu velit ornare elementum vitae vel lacus. In ut nisi lectus. Fusce orci lacus, auctor sit amet neque cursus, iaculis commodo ex. Praesent eget nisl porta, iaculis orci eget, elementum neque. Suspendisse commodo porta magna in fringilla. Suspendisse hendrerit elit ut eleifend mattis.
<br/><br/>
Suspendisse ultricies odio ut metus tincidunt, a sodales tortor pulvinar. Pellentesque elementum nisl non tempus feugiat. Sed tincidunt dolor lectus, at semper eros placerat vitae. Pellentesque eget rutrum libero. Sed fringilla laoreet sapien, et tincidunt dolor convallis nec. Curabitur pharetra nisl in ipsum tincidunt, ut mattis lorem auctor. Proin sollicitudin eros mauris, in rutrum libero pharetra non. Integer congue dui magna, luctus gravida enim maximus eget. Nulla augue lorem, facilisis a diam in, auctor vehicula magna. Nullam bibendum orci nibh, in molestie tellus molestie et. Donec pellentesque, sem sit amet vehicula dignissim, arcu leo mollis odio, vitae accumsan nibh elit quis libero.
<br/><br/>
Morbi vehicula diam a ullamcorper vulputate. Donec eget nulla semper, porta magna varius, vestibulum leo. In accumsan dictum lectus, a pretium justo sagittis eget. Ut id eros eget augue convallis consectetur. Integer tincidunt, orci et eleifend feugiat, mi ex porttitor ipsum, non ultricies urna nulla hendrerit tortor. Duis sit amet dui varius, rhoncus sapien et, fringilla ex. Nam lacinia, est ac varius eleifend, elit velit aliquam sapien, sit amet auctor urna ex sed massa.
<br/><br/>
Pellentesque laoreet metus et neque tristique, quis cursus ante pharetra. Ut imperdiet erat nec pretium luctus. Proin scelerisque ac tellus in porta. In sit amet hendrerit velit. Duis semper ex in est blandit commodo. Vestibulum consequat sodales enim, non malesuada quam condimentum vel. Nullam rhoncus nisi id arcu ultricies tempor. Aenean nec commodo felis. Sed lorem ipsum, dictum eget lorem nec, finibus blandit tellus. Donec vel orci id magna porta pharetra. Integer quis mauris in purus finibus posuere. Morbi efficitur sapien eget libero consectetur pellentesque. Phasellus fringilla finibus leo in volutpat.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ultricies ex. Morbi feugiat sem in mi condimentum, quis tincidunt tellus maximus. Duis vel elit nisi. Mauris facilisis, metus sed commodo hendrerit, sem leo convallis urna, vitae aliquet quam urna vel lorem. Maecenas placerat in turpis quis aliquam. Donec vitae odio eu velit ornare elementum vitae vel lacus. In ut nisi lectus. Fusce orci lacus, auctor sit amet neque cursus, iaculis commodo ex. Praesent eget nisl porta, iaculis orci eget, elementum neque. Suspendisse commodo porta magna in fringilla. Suspendisse hendrerit elit ut eleifend mattis.
<br/><br/>
Suspendisse ultricies odio ut metus tincidunt, a sodales tortor pulvinar. Pellentesque elementum nisl non tempus feugiat. Sed tincidunt dolor lectus, at semper eros placerat vitae. Pellentesque eget rutrum libero. Sed fringilla laoreet sapien, et tincidunt dolor convallis nec. Curabitur pharetra nisl in ipsum tincidunt, ut mattis lorem auctor. Proin sollicitudin eros mauris, in rutrum libero pharetra non. Integer congue dui magna, luctus gravida enim maximus eget. Nulla augue lorem, facilisis a diam in, auctor vehicula magna. Nullam bibendum orci nibh, in molestie tellus molestie et. Donec pellentesque, sem sit amet vehicula dignissim, arcu leo mollis odio, vitae accumsan nibh elit quis libero.
<br/><br/>
Morbi vehicula diam a ullamcorper vulputate. Donec eget nulla semper, porta magna varius, vestibulum leo. In accumsan dictum lectus, a pretium justo sagittis eget. Ut id eros eget augue convallis consectetur. Integer tincidunt, orci et eleifend feugiat, mi ex porttitor ipsum, non ultricies urna nulla hendrerit tortor. Duis sit amet dui varius, rhoncus sapien et, fringilla ex. Nam lacinia, est ac varius eleifend, elit velit aliquam sapien, sit amet auctor urna ex sed massa.
<br/><br/>
Pellentesque laoreet metus et neque tristique, quis cursus ante pharetra. Ut imperdiet erat nec pretium luctus. Proin scelerisque ac tellus in porta. In sit amet hendrerit velit. Duis semper ex in est blandit commodo. Vestibulum consequat sodales enim, non malesuada quam condimentum vel. Nullam rhoncus nisi id arcu ultricies tempor. Aenean nec commodo felis. Sed lorem ipsum, dictum eget lorem nec, finibus blandit tellus. Donec vel orci id magna porta pharetra. Integer quis mauris in purus finibus posuere. Morbi efficitur sapien eget libero consectetur pellentesque. Phasellus fringilla finibus leo in volutpat.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que calcule el progreso
const calcularPorcetaje = (ev) => {
	const { scrollTop, scrollHeight, clientHeight } = ev.target.documentElement;

	return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, 'scroll');
//.subscribe(console.log);

const progress$ = scroll$.pipe(
	map((ev) => calcularPorcetaje(ev)),
	tap(console.log)
);

progress$.subscribe((porcentaje) => {
	progressBar.style.width = `${porcentaje}%`;
});
