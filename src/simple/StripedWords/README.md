

Our robots are always working to improve their linguistic skills. For this mission, they research the Latin alphabet and its applications.

The alphabet contains both vowel and consonant letters (yes, we divide the letters).  
Vowels -- A E I O U Y  
Consonants -- B C D F G H J K L M N P Q R S T V W X Z  

You are given a block of text with different words. These words are separated by whitespaces and punctuation marks. Numbers are not considered as words in this mission (a mix of letters and digits is not a word either). You should count the number of words (striped words) where the vowels with consonants are alternating; words that you count cannot have two consecutive vowels or consonants. The words consisting of a single letter are not striped -- don't count those. Casing is not significant for this mission.

Input: A text as a string (unicode)

Output: A quantity of striped words as an integer.

Example:
```
stripedWords('My name is ...') == 3
stripedWords('Hello world') == 0
stripedWords('A quantity of striped words.') == 1
stripedWords('Dog,cat,mouse,bird.Human.') == 3
```
How it is used: This task is a useful exercise for linguistic research and analysis. Text processing is one of the main tools used in the analysis of various books and languages and can help translate print text to a digital format.

Precondition: The text contains only ASCII symbols.
0 < len(text) < 10^5