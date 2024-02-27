// Draw triangle use function with cycle For

function DrawTriangleFor (lines , symbols ) 
{

 let string = " " ; 

  for (let i = 0; i  < lines;  i++ ) 

{
    string += symbols ;
console.log (string)

}

}

 DrawTriangleFor (  5 , 2 )

// Draw Triangle use f-n with cycle While 

function DrawTriangleWhile ( lines, symbols ) {

let j = 0 ;
let smb = " "  ;

while( j <= lines)

{ 
smb += symbols
console.log(smb)
j++
}
}
DrawTriangleWhile ( 5, "*" ) 
