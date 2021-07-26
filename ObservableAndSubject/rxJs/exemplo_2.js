const { Observable, Subscriber } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJs')
    subscriber.next('Está')
    subscriber.next('Sendo')
    subscriber.next('Chamado')

    if(Math.random() > 0.5) {

    } else {
        
    }

    subscriber.next('Fim')
    subscriber.complete()


})

obs.subscribe((texto) => {
    console.log(texto)
})

