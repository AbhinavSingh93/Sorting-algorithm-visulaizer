let array=[];
const container=document.querySelector('.container');

function generatebars(){
  container.innerHTML='';
  array=[];
  for(let i=0;i<30;i++)
  {
    array.push(Math.floor(Math.random()*100)+1);
  }
  displayArray();
}

function displayArray() {
  container.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translate(${index * 30}px)`;
    const barLabel=document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML=value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  });
}

async function QuickSort(l=0,h=array.length-1)
{
  if(l<h)
  {
    let p=await partition(l,h);
    await QuickSort(l,p);
    await QuickSort(p+1,h);
  }
  if (l === 0 && h === array.length - 1) {
    for (let i = 0; i < array.length; i++) {
      updateBarColor(i, "green");
      await sleep(50);
    }
    enable(); 
  }
}

async function partition(l,h)
{
  const pivot=array[l];
  let i=l-1,j=h+1;
  while(true)
  {
    do{
      i++;
      updateBarColor(i, "red"); 
      await sleep(100);
    }
    while(array[i]<pivot);
    
    do{
      j--;
      updateBarColor(j, "blue"); 
      await sleep(100);
    }
    while(array[j]>pivot);

    if(i>=j) return j;
    await swapanddisplay(i, j);
    await sleep(100);
  }
}

async function swapanddisplay(i,j){
  await updateBar(i, array[j]);
  await updateBar(j, array[i]);
  [array[i], array[j]] = [array[j], array[i]];
}

async function updateBar(index, height) {
  const bar = container.children[index];
  bar.style.height = `${height * 3}px`;
  bar.querySelector('.bar_id').innerHTML = height;
  await sleep(100);
}

function updateBarColor(index, color) {
  const bar = container.children[index];
  bar.style.backgroundColor = color;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

generatebars();

function generate()
{
  window.location.reload();
}

function disable()
{
  document.getElementById("Button1").disabled=true;
  document.getElementById("Button1").style.backgroundColor="#d8b6ff";
  
  document.getElementById("Button2").disabled=true;
  document.getElementById("Button2").style.backgroundColor="#d8b6ff";
}

function enable()
{
  document.getElementById("Button1").disabled=false;
  document.getElementById("Button1").style.backgroundColor="#6f459e";

  document.getElementById("Button2").disabled=false;
  document.getElementById("Button2").style.backgroundColor="#6f459e";
}
