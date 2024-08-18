let array = [];
const container = document.querySelector('.container');


function generatebars() {
  container.innerHTML = '';
  array = [];
  for (let i = 0; i < 30; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
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

async function MergeSort(start = 0, end = array.length - 1) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    await MergeSort(start, mid);
    await MergeSort(mid + 1, end);
    await merge(start, mid, end);
  }
  if (start === 0 && end === array.length - 1) {
    enable();
  }
}

async function merge(start, mid, end) {
  const leftArray = array.slice(start, mid + 1);
  const rightArray = array.slice(mid + 1, end + 1);
  
  let i = 0, j = 0, k = start;
  const bars = document.querySelectorAll('.bar');

  while (i < leftArray.length && j < rightArray.length) {
    
    bars[k].style.backgroundColor = "blue";

    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    updateBar(k, array[k]);
    await sleep(100);
    bars[k].style.backgroundColor = "green";
    k++;
  }
  
  while (i < leftArray.length) {
    bars[k].style.backgroundColor = "blue";
    array[k] = leftArray[i];
    updateBar(k, array[k]);
    await sleep(100);
    bars[k].style.backgroundColor = "green";
    i++;
    k++;
  }
  
  while (j < rightArray.length) {
    bars[k].style.backgroundColor = "blue";
    array[k] = rightArray[j];
    updateBar(k, array[k]);
    await sleep(100);
    bars[k].style.backgroundColor = "green";
    j++;
    k++;
  }
}


function updateBar(index, height) {
  const bar = container.children[index];
  bar.style.height = `${height * 3}px`;
  bar.innerHTML = `<div class="bar_id">${height}</div>`;
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
