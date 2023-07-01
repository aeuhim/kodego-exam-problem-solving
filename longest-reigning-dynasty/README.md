# Longest Reigning Dynasty

This folder contains a solution for the Longest Reining Dynasty problem, which involves analyzing a chronological list of dynasties and their respective end of reign in Roman numerals. The goal is to identify the dynasty that reigned the longest.

## Instructions

To solve the Longest Reigning Dynasty problem, you need to implement the following functions in your code:

### `longestDynasty(dynastyReign)`

This function should take an array of key-value pairs (`dynastyReign`) as input and return the name of the dynasty that reigned the longest. Each key-value pair represents the name of the dynasty and the year of its end of reign in Roman numerals.

### `convertYear(year)`

This function should take a year represented in Roman numerals (`year`) as input and translate it into an integer. If the input Roman numeral is invalid, the function should return the word "Invalid" instead of the year.

#### Conditions

- The starting year is 1000 (represented as "M" in Roman numerals).

- The end of reign of one dynasty is the start of reign of another.

- Entries with invalid Roman numerals (invalid year of end of reign) should be removed.

- If the `dynastyReign` array is empty, the `longestDynasty` function should return "No Data".