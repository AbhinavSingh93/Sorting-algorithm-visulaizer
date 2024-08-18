let array = [];
const container = document.querySelector('.container');

// Function to generate a new array of bars
function generatebars() {
  container.innerHTML = '';
  array = [];
  for (let i = 0; i < 30; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  displayArray();
}

// Function to display the array as bars
function displayArray() {
  container.innerHTML = '';
  array.forEach((value, index) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translate(${index * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  });
}

async function maxheapify(n, i) {
  let bars=document.querySelectorAll('.bar');
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && Number(bars[left].childNodes[0].innerHTML) >  Number(bars[largest].childNodes[0].innerHTML)) largest = left;
  if (right < n && Number(bars[right].childNodes[0].innerHTML) >  Number(bars[largest].childNodes[0].innerHTML)) largest = right;

  if (largest !== i) {
        bars[largest].style.backgroundColor="red";
        bars[i].style.backgroundColor="blue";
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[largest].style.height;
        bars[largest].style.height = temp1;
        bars[i].childNodes[0].innerText =
        bars[largest].childNodes[0].innerText;
        bars[largest].childNodes[0].innerText = temp2;
         
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
        await maxheapify(n, largest);
    }
}

async function HeapSort() {
   let n=array.length
  let bars=document.querySelectorAll('.bar');
  
  for(let i=n/2-1;i>=0;i--)
  {
    await maxheapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
        let temp1 = bars[i].style.height;
        let temp2 = bars[i].childNodes[0].innerText;
        bars[i].style.height = bars[0].style.height;
        bars[0].style.height = temp1;
        bars[i].childNodes[0].innerText =
        bars[0].childNodes[0].innerText;
        bars[0].childNodes[0].innerText = temp2;
        bars[i].style.backgroundColor="green";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );
 
        await maxheapify(i, 0);
      }

  container.children[0].style.backgroundColor = "green";

  enable();
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
