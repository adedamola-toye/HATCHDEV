const fibonacci = (n: number)=>{
    if(n < 1) return  'Invalid input! Please enter a positive no greater than 1';

    if(n <= 2) return 1;

    //Tn = Tn-1 + Tn-2
    return fibonacci(n-1) + fibonacci(n-2);

}

console.log(fibonacci(7));