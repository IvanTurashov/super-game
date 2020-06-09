
export interface Subject {
  notify(): void;
  attach(observer: Observer): void;
  detach(observer: Observer): void;

  }

export interface Observer {
    update(subject: Subject): void;
  }
