import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: ()=> console.info("completado")
}

const intervalo$ = new Observable<number>( subs => {

  let a:number = 0;

  const interval = setInterval(()=> {
    a++
    subs.next(a)
  }, 1000);

  return ()=> {
    clearInterval(interval);
    console.log("interval destruido")
  }

})

const subs1 = intervalo$.subscribe(num => console.log("num: ", num));
const subs2 = intervalo$.subscribe(num => console.log("num: ", num));
const subs3 = intervalo$.subscribe(num => console.log("num: ", num));

subs1.add(subs2).add(subs3);

setTimeout(()=> {
  subs1.unsubscribe();

  console.log("completado");
}, 4000);