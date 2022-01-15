Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

Input: A string.

Output: An array of strings.

Example:  
splitPairs('abcd') == ['ab', 'cd']  
splitPairs('abc') == ['ab', 'c_']  
splitPairs('abcdf') == ['ab', 'cd', 'f_']  
splitPairs('a') == ['a_']  
splitPairs('') == []  

Precondition: 0<=len(str)<=100 