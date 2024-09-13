function fibonacci(num) {
// your code here
let a = 0; // F(0)
    let b = 1; // F(1)

    // Iterate through to find the num-th Fibonacci number
    for (let i = 2; i <= num; i++) {
        // Compute the next Fibonacci number
        const next = a + b;
        // Update a and b for the next iteration
        a = b;
        b = next;
    }

    // Return the num-th Fibonacci number
    return b;
	
}

module.exports = fibonacci;
