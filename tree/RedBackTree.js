// import { Node } from './node';

// export enum Colors {
//   RED = 0,
//   BLACK = 1
// }

// export class RedBlackNode<K> extends Node<K> {
//   left: RedBlackNode<K>;
//   right: RedBlackNode<K>;
//   parent: RedBlackNode<K>;
//   color: Colors;

//   constructor(public key: K) {
//     super(key);
//     this.color = Colors.RED;
//   }

//   isRed() {
//     return this.color === Colors.RED;
//   }

//   flipColor() {
//     if (this.color === Colors.RED) {
//       this.color = Colors.BLACK;
//     } else {
//       this.color = Colors.RED;
//     }
//   }
// }

// export enum Compare {
//   LESS_THAN = -1,
//   BIGGER_THAN = 1,
//   EQUALS = 0
// }
// export function defaultCompare<T>(a: T, b: T): number {
//   if (a === b) {
//     return Compare.EQUALS;
//   }
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// export type ICompareFunction<T> = (a: T, b: T) => number;