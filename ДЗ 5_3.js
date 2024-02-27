// ДЗ 5.3 Фунцкия pow, которая принимает 2 числа в степени 


function pow(x, n) 
{
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    console.log (result);
  }
  
  pow (3,2)