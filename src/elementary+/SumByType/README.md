You have an array. Each value from that array can be either a string or an integer. Your task here is to return two values. The first one is a concatenation of all strings from the given array. The second one is a sum of all integers from the given array.

Input: A list of strings and ints

Output: An array

Example:  
sumByTypes([]) == ['', 0]  
sumByTypes([1, 2, 3]) == ['', 6]  
sumByTypes(['1', 2, 3]) == ['1', 5]  
sumByTypes(['1', '2', 3]) == ['12', 3]  
sumByTypes(['1', '2', '3']) == ['123', 0]  
sumByTypes(['size', 12, 'in', 45, 0]) == ['sizein', 57]  

How it’s used: (math is used everywhere)

Precondition:   
both given ints should be between -1000 and 1000 