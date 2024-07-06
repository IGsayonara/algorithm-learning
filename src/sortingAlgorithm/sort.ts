export default class Sort {
  private static swap = (arr: any[], indexA: any, indexB: any) => {
    const t = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = t;
  };

  public static selectionSort = (arr: any[], comparator: (a: any, b: any) => boolean) => {
    // time: O(n2) space O(1)
    for (let i = 0; i < arr.length; i += 1) {
      let selected = i;
      for (let j = i; j < arr.length; j += 1) {
        if (comparator(arr[j], arr[selected])) {
          selected = j;
        }
      }

      Sort.swap(arr, i, selected);
    }
  };

  public static bubbleSort = (arr: any[], comparator: (a: any, b: any) => boolean) => {
    // time: O(n2) space O(1)
    for (let i = 0; i < arr.length; i += 1) {
      let changed = false;

      for (let j = i; j < arr.length - i - 1; j += 1) {
        if (comparator(arr[j], arr[i])) {
          Sort.swap(arr, i, j);
          changed = true;
        }
      }

      if (!changed) break;
    }
  };

  public static insertionSort = (arr: any[], comparator: (a: any, b: any) => boolean) => {
    // time: O(n2) space O(1)
    for (let i = 1; i < arr.length; i += 1) {
      const current = arr[i];
      let j = i - 1;

      while (j >= 0 && comparator(current, arr[j])) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = current;
    }
    return arr;
  };

  // eslint-disable-next-line max-len
  private static merge = (left: any[], right: any[], comparator: (a: any, b: any) => boolean): any[] => {
    const result: any[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (comparator(left[leftIndex], right[rightIndex])) {
        result.push(left[leftIndex]);
        leftIndex += 1;
      } else {
        result.push(right[rightIndex]);
        rightIndex += 1;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  public static mergeSort = (arr: any[], comparator: (a: any, b: any) => boolean): any[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid), comparator);
    const right = this.mergeSort(arr.slice(mid), comparator);

    return this.merge(left, right, comparator);
  };

  public static quickSort = (arr: any[], comparator: (a: any, b: any) => boolean): any[] => {
    // Базовый случай: если массив пустой или содержит один элемент, он уже отсортирован
    if (arr.length <= 1) {
      return arr;
    }

    // Выбираем опорный элемент
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Разделяем элементы на два подмассива: меньшие и большие опорного элемента
    const left: any[] = [];
    const right: any[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue; // пропускаем опорный элемент
      }
      const currentElement = arr[i];
      if (comparator(currentElement, pivot)) {
        left.push(currentElement);
      } else {
        right.push(currentElement);
      }
    }

    // Рекурсивно сортируем подмассивы и объединяем их в один отсортированный массив
    return [...this.quickSort(left, comparator), pivot, ...this.quickSort(right, comparator)];
  };
}
