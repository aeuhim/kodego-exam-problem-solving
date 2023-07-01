# Sales Problem

This folder contains a solution for the Sales Problem, which involves analyzing sales profit data for multiple products and performing the following tasks:

1. Finding the product with the highest sales profit.
2. Finding the product with the lowest sales profit.
3. Finding the product with the sales profit closest to 0.

## Instructions

To solve the Sales Problem, you need to implement the following functions in your code:

### `topProduct(productProfitArray)`

This function should return the name of the product with the highest sales profit.

### `bottomProduct(productProfitArray)`

This function should return the name of the product with the lowest sales profit.

### `zeroProfitProduct(productProfitArray)`

This function should return the name of the product with the sales profit closest to 0, given an array of key-value pairs representing the product names and their respective sales profits.

#### Conditions

- If the `productProfitArray` is empty, the function should return "No Data".

- If two products have sales profits that are equally close to 0, the function should consider the positive profit as the one closest to zero. For example, if Product A has a profit of -100 and Product B has a profit of 100, the function should return the name of Product B.