const { Observable } = require('rxjs')

const observer = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
  };

  observable.subscribe(observer);

  observable.subscribe(x => 
    console.log('Observer got a next value: ' + x)
    );