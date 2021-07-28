const { Observable, Subscriber } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJs')
    subscriber.next('Está')
    subscriber.next('Sendo')
    subscriber.next('Chamado')
    subscriber.next('Fim')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
         throw "Erro"
    }
})

obs.subscribe(
    (texto) => console.log(texto),
    (error) => console.log(error),
    () => console.log('Completado')
)


