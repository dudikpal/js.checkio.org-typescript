Your mission is to convert the name of a function (a string) from the Python format (for example "my_function_name") into CamelCase ("MyFunctionName"), where the first char of every word is in uppercase and all words are concatenated without any intervening characters.

Input: A function name as a string.

Output: The same string, but in CamelCase.

Example:
```
toCamelCase('my_function_name') == 'MyFunctionName'
toCamelCase('i_phone') == 'IPhone'
```

How it is used: To apply function names in the style in which they are adopted in a specific language (Python, JavaScript, etc.).

Precondition:  
0 < len(string) <= 100  
Input data won't contain any numbers.