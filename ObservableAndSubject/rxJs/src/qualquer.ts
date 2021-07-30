
 
import { connectable, interval, merge, of, Subject, zip } from "rxjs";
import { filter, map } from "rxjs/operators";

const chars = zip(interval(1000), of("A", "b", "C", "D", "e", "f", "G")).pipe(
  map(([, char]) => char)
);
const connectableChars = connectable(chars, {
  connector: () => new Subject(),
  resetOnDisconnect: true
});

const lower = connectableChars.pipe(
  filter(x => x.toLowerCase() === x),
  map(x => `lower ${x.toUpperCase()}`)
);

const upper$ = connectableChars.pipe(
  filter(x => x.toLowerCase() !== x),
  map(x => `upper ${x}`)
);

function connect() {
  merge(lower, upper$).subscribe(console.log);
  return connectableChars.connect();
}

const connection = connect();
setTimeout(() => {
  connection.unsubscribe();
  connect();
}, 3000);
// (after ~1s) upper A
// (after ~1s) lower B
// (after ~1s) upper C
// (after ~1s) upper A
// (after ~1s) lower B
// (after ~1s) upper C
// (after ~1s) upper D
// (after ~1s) lower E
// (after ~1s) lower F
// (after ~1s) upper G