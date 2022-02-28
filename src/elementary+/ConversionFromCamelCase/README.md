Your mission is to convert the name of a function (a string) from CamelCase ("MyFunctionName") into the Python format ("my_function_name") where all chars are in lowercase and all words are concatenated with an intervening underscore symbol "_".  

Input: A function name as a CamelCase string.  

Output: The same string, but in under_score.  

Example:
```
fromCamelCase('MyFunctionName') == 'my_function_name'
fromCamelCase('IPhone') == 'i_phone'
```

How it is used: To apply function names in the style in which they are adopted in a specific language (Python, JavaScript, etc.).

Precondition:  
0 < len(string) <= 100  
Input data won't contain any numbers.