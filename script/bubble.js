const container=document.querySelector(".container");

function generatebars(num=20){
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

async function BubbleSort(delay=300)
{
  let bars=document.querySelectorAll(".bar");

  for(var i=0;i<bars.length-1;i+=1)
  {
    let swapped=false;
    for(var j=0;j<bars.length-i-1;j++)
    {
      bars[j].style.backgroundColor='red';
      bars[j+1].style.backgroundColor="darkblue";
      await new Promise((resolve)=>
        setTimeout(()=>{
          resolve();
        },300)
      );

      var val1=parseInt(bars[j].childNodes[0].innerHTML);
      var val2=parseInt(bars[j+1].childNodes[0].innerHTML);

      if(val1>val2)
      {
        var temp1=bars[j].style.height;
        var temp2=bars[j].childNodes[0].innerText;
        bars[j].style.height=bars[j+1].style.height;
        bars[j+1].style.height=temp1;
        bars[j].childNodes[0].innerText=bars[j+1].childNodes[0].innerText;
        bars[j+1].childNodes[0].innerText=temp2;
       
        swapped=true;
        
      }
     

      bars[j].style.backgroundColor="rgb(24,190,255)";
      bars[j+1].style.backgroundColor="rgb(49,226,13)";
    }
    
  }
bars[0].style.backgroundColor="rgb(49,226,13)";
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
  
  