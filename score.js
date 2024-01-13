let selectedValue;
document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.getElementById('myselect');

  function handleSelectChange(value) {
    // Handle the selected value here, you can perform any actions you want with it
    console.log(value);
    selectedValue = value; // If you want to store it in the 'selectedValue' variable
  }

  selectElement.addEventListener('change', function() {
    const value = selectElement.value;
    handleSelectChange(value); // Call the separate function and pass the selected value
  });
});
let p1=0;
let p2=0; 
let one=document.getElementById('player1');
let two=document.getElementById('player2');
let res=document.getElementById('Reset');
let hone=document.getElementById('player-1');
let htwo=document.getElementById('player-2');
one.addEventListener('click',() => {
  if (p1 <selectedValue  && p2 <selectedValue ) {
    hone.textContent = `${++p1}`;
  }
    if (p1 >= selectedValue) {
      hone.style.color='green';
    }
  
});
two.addEventListener('click',() => {
  if (p1 < selectedValue  && p2 < selectedValue ) {
    htwo.textContent = `${++p2}`;
  }
    if (p2 >= selectedValue) {
      htwo.style.color = 'green';
    }
  
});
res.addEventListener('click',()=>{
  p1=0;p2=0;
  hone.textContent = `0`;
  htwo.textContent = `0`;
  hone.style.color = '';
  htwo.style.color = '';
})
// res.addEventListener('click',()=>{
//   p1=0;p2=0;
//   hone.textContent = `0`;
//   htwo.textContent = `0`;
//   hone.style.color = '';
//   htwo.style.color = '';
// })
// res.addEventListener('click',()=>{
//   p1=0;p2=0;
//   hone.textContent = `0`;
//   htwo.textContent = `0`;
//   hone.style.color = '';
//   htwo.style.color = '';
// })
// res.addEventListener('click',()=>{
//   p1=0;p2=0;
//   hone.textContent = `0`;
//   htwo.textContent = `0`;
//   hone.style.color = '';
//   htwo.style.color = '';
// })

