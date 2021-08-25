import { Observable, Observer, Subscriber } from "rxjs";

const firstObservavel = new Observable(
    (observer: Observer<number>) => {
        console.log('Uma')
        observer.next(120)
        observer.next(120)
    }
)


firstObservavel.subscribe(valor => console.log(valor))


const observavel = new Observable(
    function subscribe(subscriber: Observer<number>) {
        subscriber.next(2)
    }
)

observavel.subscribe( x => console.log(x));

clearInterval()