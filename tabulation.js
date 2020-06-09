/**
Create a function that will calculate minimum number of steps to get from a number (passed as a parameter n) to 1.
Available steps are you can take are: 
-1 (minus by one)
/2 (divide by two)
/3 (divide by three)
if number is 1 return 0
ex1:
  n = 3;
  n -= 1; // n is 2 => step 1
  n -= 1; // n is 1 => step 2
  we took 2 steps to get to 1 so we return 2 
ex2:
  n = 3;
  n /=3; // n is 1 => step 1
  we took 1 steps to get to 1 so we return 1 
ex3: 
  n = 5;
  n -= 1; // n is 4 => step 1
  n /= 2; // n is 2 => step 2
  n -= 1; // n is 1 => step 3
  we took 3 steps to get to 1 so we return 3 
  ** Numbers passed can be up to 1,000,000
*/