export default class Node<T> {
  constructor(value: T, next = null) {
    this.value = value;
    this.next = next;
  }

  public value: T | null = null;

  public next: Node<T> | null = null;
}
