# Lucas Paganini Programming Logic Test

With [NodeJS v14](https://nodejs.org/en/) (or superior) installed, run the following scripts:

- `npm clean-install` to install the project dependencies
- `npm test` to run the tests

In the `src/` folder, there are 3 tasks waiting for you. They do not need to be completed in order but it is recommended because they are in order of dificulty.

You have 4 hours (since downloading this project) to implement the 3 functions and pass the tests.

## Task 01 - Round with precision

In the `src/1-round-with-precision/round-with-precision.ts` file, you need to implement the function that rounds the given number using the given decimal precision points.

Rounding `33.33333` with 2 decimal points would result in `33.33` and rounding it with 0 decimal points would result in `33`.

You can look at the tests to see more examples of how the function should behave.

## Task 02 - Get precision

In the `src/2-get-precision/get-precision.ts` file, you need to implement a function that returns the amount of decimal precision points for a given number.

`12.25` has 2 decimal precision points. `12.2` has 1 decimal precision point. `12.250000` has 2 decimal precision points (because it's the same as `12.25`).

You can look at the tests to see more examples of how the function should behave.

## Task 03 - Auto distribute

In the `src/3-auto-distribute/auto-distribute.ts` file, you need to implement a function that auto distributes a number in a given amount of parts with a given amount of decimal precision points.

For example, dividing 100 in 4 parts with 0 decimal precision points would result in `[ 25, 25, 25, 25 ]`.

If the number is not divisible by the amount of parts, the remaining difference should be distributed starting from the first elements. For example, dividing 100 in 3 parts with 2 decimal precision points would result in `[ 33.34, 33.33, 33.33 ]`. Notice that the `0.01` diff went to the first element.

You can look at the tests to see more examples of how the function should behave.
