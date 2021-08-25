import { fromEvent, interval, Observable, Subscription } from "rxjs";


const inscricao1: Observable<any> = interval(1000)

const desinscricao1 = inscricao1.subscribe(
    valores => console.log(valores)
)

const inscricao2: Observable<any> = fromEvent(document, 'mousemove')

const desinscricao2 = inscricao2.subscribe(
    evento => console.log(evento)
)


let subscription: Subscription[] = [];

subscription.push(desinscricao1)
subscription.push(desinscricao2)

export class Seila {
    
}