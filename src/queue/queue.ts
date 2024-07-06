import Node from '../node/node';

export default class Queue<T> {
  private firstItem: null | Node<T> = null;

  private lastItem: null | Node<T> = null;

  private size = 0;

  public enqueue(value: T): number {
    const node = new Node(value);

    if (this.lastItem) {
      this.lastItem.next = node;
    }

    if (!this.firstItem) {
      this.firstItem = node;
    }

    this.lastItem = node;

    this.size += 1;

    return this.size;
  }

  public dequeue() {
    if (!this.firstItem) return null;

    const { value, next } = this.firstItem;

    this.firstItem = next;
    this.size -= 1;

    if (!this.firstItem) {
      this.lastItem = null;
    }

    return value;
  }

  public getSize() {
    return this.size;
  }
}
