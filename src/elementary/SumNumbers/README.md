In a given text you need to sum the numbers. Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.

The text consists from numbers, spaces and english letters

Input: A string.

Output: An int.

Example:  
sumNumbers('hi') == 0  
sumNumbers('who is 1st here') == 0  
sumNumbers('my numbers is 2') == 2  
sumNumbers('This picture is an oil on canvas '  
'painting by Danish artist Anna '  
'Petersen between 1845 and 1910 year') == 3755  
sumNumbers('5 plus 6 is') == 11  
sumNumbers('') == 0
