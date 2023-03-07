# Regex

**Regular expressions**, or **regex** for short,<br/> _Are a series of special characters that define a search pattern_.
Regular Expressions (Regex) <br/> a pattern-matching language used for searching and manipulating text. It allows you to search for patterns within strings, replace text, and validate input

## Summary

Below I'm going to analyze a Regex that is utilized to check if a user is using the correct format to input an email address.



_Im checking to see if the email at has :_ 
<br/> 
* `a bracket expression containing to match any lowercase letter between a-z,`
<br/> 
* `a digit between 0-9`
<br/> 
* `an underscore ("_") `
<br/> 
* `a dot (".") and ("-") hyphen`
<br/> 
* `followed by an @ symbol`
<br/>
* `then a bracket expression containing to match either a digit (\d), any lowercase letter between a-z`
<br/>
* `a dot (".") and ("-") hyphen`
<br/> 
* `followed by a  (".")`
<br/> 
* `then a bracket expression containing to match any lowercase letter between a-z, a dot (".")`
<br/>
* `between 2 and 6 lowercase letters or dots`

 * `Also note that The email address must start and end with the given pattern, indicated by the caret (^) and dollar sign ($), respectively.`

 `Matching an Email` : <br/> `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`<br/>

## Table of Contents

- [Anchors](#anchors)✅
- [Quantifiers](#quantifiers)✅
- [Character Classes](#character-classes)✅
- [Grouping and Capturing](#grouping-and-capturing)✅

## Regex Components (**Atoms**)

### Anchors (Positions)

**Anchors** are used to specify the **position** of a match in the input string, rather than the actual content of the match: <br />

- `^` -> indicates the beginning of the string. In this example, anything to the left of the (`^`) is the string itself. <br />


- `$` -> indicates the end the string, similar to punctuation at the end of a sentence.

### Quantifiers

These are known as Quantifiers : <br />

- `*` 
- `.`
- `?` 
- `+` 
- `{}` 
  <br />

Are known as metacharacters that specify how many times a particular character, group, or character class should be matched


Let's see these quantifiers in combination with a few more (**atoms** | **components**) below.

### Character Classes

utilizing the **Brackets** `[]` these help us to match a number of char ex: `[a-z\.]`
in other words, they define a set of characters, any one of which can occur in an input string to fulfill a match.

### Grouping and Capturing

Utilizing the parentheses `()` we can **Group** a subgroup of a literal group of char and **Capture** a select number of string char

### Bracket Expressions

utilizing the **Brackets** `[]` these help us to match a number of char ex: <br />
- `[a-z\.]` 
<br/>this matches any single character that is either a lowercase letter from "a" to "z" or a period (".") character



## Summary

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`
Brief recap on what is going on here:

- This string begins with a **Class of Characters** and must contain at least one or more alphanumeric char (`^([a-z0-9_\.-]+)`);

- Followed by a **@** symbol
- Then the following string within a **Class of Characters** must contain at least one digit, a lowercase letter between a-z followed by one or more dots and hyphen `([\da-z\.-]+)`;

- Followed by a (**\.**) (period/dot) symbol (which is to be taken as a **literal** period/dot) ;
- The string within a **Class of Characters** must contain a lowercase letter between a-z (`[a-z\.])`);

- These digits wrapped within the curly braces, making it quantifiable - `{2,6}` a quantifier that matches the preceding character, character class, or group between 2 and 6 times, inclusive;

- (`^`)---> This symbol signifies the beginning of a string;

- (`$`) <--- This symbol signifies the end of a string;

## Author

- _About the Author:_ **Olu** is A Creative thinker and capable humane being.
Aspiring to spread Awareness and Empathy through out the world by utilizing the Arts, Technology and Human interaction. <br />I'm doing this in a variety of ways with a variety of mediums ; <br/> 
 **Avid life learner 🧠** Self driven and self taught Web dev - Software Constructor(**Engineer**) with over a few months of MERN stack experience, yet over 10 years of creative experience; 
 <br/>Ranging from **UI/UX** conceptual design to hi-fidelity wireframes, Visual design, **Creative Direction**, Product design, **Audio engineering** , Musical production, Visual(Film, Photography, Analog-Collage) and Literature Art. <br/>



`Github` : https://github.com/EshuShango


