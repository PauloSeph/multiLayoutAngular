const {Observable, noop} = require('rxjs')


function fromArray(array) {
    return Observable.create( (subscriber) => {
        array.forEach(element => subscriber.next(element))
        subscriber.complete()
    })
}


const arrayzin = [1, 2, 3, 4, 5, 6];

fromArray(arrayzin).subscribe(
    (value) => console.log(value),
    noop,
    () => console.log('Fim')
)


