const { Observable } = require('rxjs')


const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});


console.log('Antes do Subscribe');

observable.subscribe({
  next(x) { console.log('Tenho o valor' + x) },
  error(err) { console.error('Caso aconteça erro: ' + err); },
  complete() { console.log('Acabou'); }
});

console.log('Somente depois do subscribe');


