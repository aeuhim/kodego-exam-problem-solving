# Longest Jumping Distance

This folder contains a solution for the Blocks problem, which involves determining the maximum distance two frogs can create between each other when jumping across a row of blocks.


## Instructions

There are N blocks, numbered from 0 to N-1, arranged in a row. Two frogs initially sit on the same block but want to jump away from each other to maximize the distance between them. The distance between blocks numbered J and K, where J <= K, is computed as K - J + 1.

The frogs can only jump up, meaning that they can move from one block to another only if the two blocks are adjacent and the second block is of the same or greater height as the first.

The task is to implement the `solution(blocks)` function, which takes an array `blocks` consisting of N integers denoting the heights of the blocks. The function should return the longest possible distance that the two frogs can create between each other starting from the most optimal block.
