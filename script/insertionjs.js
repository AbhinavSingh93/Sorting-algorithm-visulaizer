const container=document.querySelector(".container");

function generatebars(num=20)
{
  for(let i=0;i<num;i++)
  {
    const value=Math.floor(Math.random()*100)+1;
    const bar=document.createElement("div");
    bar.classList.add("bar");
    bar.style.height=`${value*3}px`;
    bar.style.transform=`translate(${i*30}px)`;
    const barLabel=document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML=value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

async function InsertionSort(delay=300)
{
  let bars=document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = "green";
  for(var i=1;i<bars.length;i+=1)
  {
    var key=bars[i].style.height;
    var keypart=bars[i].childNodes[0].innerText;

    bars[i].style.backgroundColor="darkblue";

    var j=i-1;

    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 300) 
    ); 
    
    var val1=parseInt(bars[i].childNodes[0].innerHTML);

    while(j>=0 && parseInt(bars[j].childNodes[0].innerHTML)>val1)
    {
      bars[j].style.backgroundColor="red";


      bars[j+1].style.height=bars[j].style.height;
      bars[j+1].childNodes[0].innerText=bars[j].childNodes[0].innerText;

      j--;

      await new Promise((resolve)=>
        setTimeout(()=>{
          resolve();
        },300)
      );
      
      for(var k=i;k>=0;k--)
      {
        bars[k].style.backgroundColor="green";
      }
    }

    bars[j+1].style.height=key;
    bars[j+1].childNodes[0].innerText=keypart;

    await new Promise((resolve) => 
      setTimeout(() => { 
        resolve(); 
      }, 300) 
    );
  
   bars[i].style.backgroundColor = " green";
  }

document.getElementById("Button1").disabled=false;
document.getElementById("Button1").style.backgroundColor="#6f459e";

document.getElementById("Button2").disabled=false;
document.getElementById("Button2").style.backgroundColor="#6f459e";
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