const scren1 = document.querySelector('.scren-1');
const scren2 = document.querySelector('.scren-2');
const resultS = document.querySelector('.result-res');
const numbers = document.querySelectorAll('.number');
const operationn = document.querySelectorAll('.operation ');
const equalToo = document.querySelector('.equalTo ');
const cler = document.querySelector('.clear ');
const deleteSingle_number = document.querySelector('.delete-single_num ');

let numbers1 ="";
let numbers2 ="";
let resuult = null;
let lastOperation = "";
let Point = false;
let MONT = false;


numbers.forEach( number => {
 number.addEventListener('click',(e)=> { // numero qui cliky
        
   if(e.target.innerText === '.' && !Point) 
  { 
    Point = true;
  }
   else if(e.target.innerText === '.' && Point ) 
  { 
    return;
  }
   if(e.target.innerText === '-' && !MONT)
  { 
   MONT = true;
  }
   else if(e.target.innerText === '-' &&  MONT  )
  { 
   return;
  }
   else if(e.target.innerText =='-' && numbers2)
  {
   MONT = true;
  }
    numbers2 += e.target.innerText;
    scren2.innerText =  numbers2;
 })   
});
  // OPERATION========================================================
operationn.forEach( operation => {
  operation.addEventListener ('click', (e) =>
  {
   if(!numbers2) return;
    Point = false;
    const operationName = e.target.innerText;    //????????????????
    if(numbers1 && numbers2 && lastOperation) 
    {
      mathOperation();
    }
    else
    {
     resuult = parseFloat(numbers2);    //??????????????     
    }
    clearVar(operationName);
    lastOperation = operationName; // ??????????
    console.log(resuult);
  })  
});
function clearVar(name = ''){
  numbers1 += numbers2+ '' + name +''; // all operation
  scren1.innerText=numbers1;    //les nmbrs kithato fy scren 1
  scren2.innerText='';        //scren 2 tkhwa mn ba3d mn hat ar9am  
  numbers2 = '';              // bash maib9ash ytzad 3la nmber 
  resultS.innerText = resuult;
}
function mathOperation(){
  if(lastOperation ==='X')
  {
    resuult = parseFloat(resuult) * parseFloat(numbers2);     
  }
  else if(lastOperation ==='+')
  {
     resuult = parseFloat(resuult) + parseFloat(numbers2);     
  }
  else if(lastOperation ==='-')
  {
     resuult = parseFloat(resuult) - parseFloat(numbers2);     
  }
  else if(lastOperation ==='/')
  {
     resuult = parseFloat(resuult) / parseFloat(numbers2);     
  }
  else if(lastOperation ==='%')
  {
     resuult = parseFloat(resuult) % parseFloat(numbers2);     
  }
   //equall =====================================================
}
equalToo.addEventListener('click',(e)=> {
 if( !numbers1 || !numbers2 )  return;
   Point = false; //,??????
   mathOperation();
   clearVar();
   scren2.innerText = resuult;
   resultS.innerText = '';
   numbers2 = resuult;
   numbers1 = '';
})
  // clea============================================================
cler.addEventListener('click',(e) =>{
    Point =false;
    MONT = false;
    scren1.innerText = '';
    scren2.innerText = '';
    numbers1 ='';
    numbers2 = '';
    resuult = '';
    resultS.innerHTML='';
})
//  delete single number*/=======================================
function delete_character()
{
  numbers2 = numbers2.slice(0,-1);
  scren2.innerText=numbers2 ;
}

              











