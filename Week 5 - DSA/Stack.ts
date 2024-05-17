interface IStack<T>{
    peek() : T;
    pop(): T;
    push(data: T);
    size();
}