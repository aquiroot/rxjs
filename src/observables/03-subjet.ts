import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: ()=> console.info("completado")
}

const intervalo$ = new Observable<number>(subs => {

  const intervalID = setInterval(
    ()=> subs.next( Math.random() ), 3000
    );

    return () => {
      clearInterval(intervalID);
      console.log("intervalo destruido");
    }
});

const subject$ = new Subject();
const subscrip = intervalo$.subscribe(subject$);

const subs2 = subject$.subscribe(rnd => console.log("subs1: ", rnd));
const subs1 = subject$.subscribe(rnd => console.log("subs2: ", rnd));

setTimeout( () => {
  subject$.next(10);

  subject$.complete();

  subscrip.unsubscribe();
}, 3500);