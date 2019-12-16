export class Todo {

  constructor(
    readonly id: number,
    readonly title: string,
    readonly description: string,
    readonly time: string,
    readonly progress: number,
  ) {

  }

  static mocked0(): Todo {
    return new Todo(
      0,
      'Backyard Bulb',
      'ALERT!!! Movement at your [Backyard] was detected. Please select response below.',
      'TIME: 2.20AM JULY 27TH 2019',
      93,
    );
  }

  static mocked1(): Todo {
    return new Todo(
      1,
      'Frontyard Bulb',
      'ALERT!!! Movement at your [Frontyard] was detected. Please select response below.',
      'TIME: 12: 18AM JULY 27TH 2019',
      23,
    );
  }

  static mocked2(): Todo {
    return new Todo(
      2,
      'Gate Bulb',
      'ALERT!!! Movement at your [Gate] was detected. Please select response below.',
      'TIME: 10.00PM JULY 26TH 2019',
      43,
    );
  }
}

