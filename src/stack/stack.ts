import Node from '../node/node';

export default class Stack<T> {
  private topItem: null | Node<T> = null;

  private size = 0;

  public push(value: T): number {
    const node = new Node(value);

    if (this.topItem) {
      node.next = this.topItem;
    }

    this.topItem = node;
    this.size += 1;

    return this.size;
  }

  public pop() {
    if (!this.topItem) return null;

    const { value, next } = this.topItem;

    this.topItem = next;
    this.size -= 1;

    return value;
  }

  public peek(): T | null {
    return this.topItem?.value || null;
  }

  public getSize(): number {
    return this.size;
  }
}
