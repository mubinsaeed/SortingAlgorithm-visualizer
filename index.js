
let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let minRange = 1;
let heightFactor = 4;
let speedFactor = 400;
var unsorted_array = [];
var maxRange = unsorted_array.length;
var numOfBars = unsorted_array.length;
let othercontainer = document.getElementById("other_container");
let algotouse = "";
let timecomplexity = 0;
let spacecomplexity = 0;
let upload = document.getElementById("upload");
upload.addEventListener("change",()=>{
  let fr = new FileReader();
  fr.readAsText(upload.files[0]);
  fr.onload = function(){
    for(let i=0;i<fr.result.length;i++)
  { let counter = 0;
    let temtext = "";
    counter = i; 
     while(fr.result[counter] != " " && counter<fr.result.length)
   {  temtext = temtext+fr.result[counter];
       counter++;
   }
   i = counter;
     unsorted_array.push(parseInt(temtext));
    //renderBars(unsorted_array);
  }
  console.log(unsorted_array);
  numOfBars = unsorted_array.length;
  maxRange = unsorted_array.length;
  renderBars(unsorted_array);
  
  }
}) 


//let unsorted_array = [23,50,66,71,100,49,79,39,44,65,35,33];
select_algo.addEventListener("change", function () {
  algotouse = select_algo.value;
});



document.addEventListener("DOMContentLoaded", function () {
  //renderBars(unsorted_array);
  document.getElementById("hidethis").style.visibility = 'hidden';
});

function calheight(array,elem)
{   let m = Math.max(...array);
    elem = 1

}

function renderBars(array) {
  console.log("inside fun");
  console.log("noof bar"+numOfBars);
  
  for (let i = 0; i < numOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
    bars_container.appendChild(bar);
    bars_container.children[i].innerText = array[i];
  }
}

function createRandomArray() {
  for (let i = unsorted_array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = unsorted_array[i];
    unsorted_array[i] = unsorted_array[j];
    unsorted_array[j] = temp;
}

}


randomize_array.addEventListener("click", function () {
  createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsorted_array);
});


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var temp2 = [];

async function counttext(n1,n2,t)
{ 
  let element = document.createElement("div");
     element.classList.add("nnew");
     element.style.fontSize = "1.5rem";
     element.style.backgroundColor = "crimson";
     element.style.marginTop = "1rem"; 
     element.style.marginLeft = "1rem"; 
     element.style.borderRadius = "5px";
     element.style.width = "4rem";
     element.style.color = "white";
     element.style.justifyContent = "center";
     othercontainer.children[n1].appendChild(element);
     othercontainer.children[n1].children[n2].innerText = t;


}


async function fillfinaldiv_count()
{ var vv = []; 
  let target = othercontainer.children[1].children;
  let target2 = othercontainer.children[0].children;
  let target3 = othercontainer.children[2].children;
  let cc  = 0;
  for(let i = 1;i<target.length;i++)
  {   let temp = parseInt(target[i].innerText);
    let othertemp = parseInt(target2[i].innerText);
      while(temp!=0)
        { counttext(2,cc,othertemp);   
          target3[cc].style.backgroundColor = "purple";
          vv.push(othertemp);
          temp = temp-1;
          target[i].style.backgroundColor = "pink";
              target[i].innerText = temp;
              await sleep (speedFactor);
              target3[cc].style.backgroundColor = "crimson";
             
              cc = cc+1;
        }
        target[i].style.backgroundColor = "crimson";
    await sleep(speedFactor);
  }
  console.log(vv);
}



async function manipulatecountsort(array,maxfc)
{ var counter = 1;
  counttext(0,0,"Index");
   counttext(1,0,"Value");
  for(let i=0;i<=maxfc;i++)
  {    if(array[i]!=null)
    { 
     counttext(0,counter,i);
    counttext(1,counter,array[i]);
    counter= counter+1;
  await sleep(speedFactor+500);
  }
    
    }
    fillfinaldiv_count();
  }



function countsort(array)
{   disabling();
  let maxforcount = Math.max(...array);
              for(let i=0;i<array.length;i++)
              { if(temp2[array[i]] == null)
                  {
                    temp2[array[i]] = 1;
                  }
                  else
                  {
                    ++temp2[array[i]];
                  }

              }
              console.log(temp2+" "+maxforcount);
             creationdiv(3);
             manipulatecountsort(temp2,maxforcount);
}





var arr2 = [170, 45, 75, 90, 802, 24, 2, 66];
function sortingforradix(array,num)
{ for(let i =0;i<array.length-1;i++)
   {
       for(let j=0;j<array.length-i-1;j++)
       {
           if(array[j][num]>array[j+1][num])
           {
            let t = array[j];
            array[j] = array[j+1];
            array[j+1] = t;
           }
       }
   }
return array;
}

async function radixsort(array)
{  disabling();
 let max =Math.max(...array).toString() ;
 console.log("lengthis"+max.length);
  console.log(max);
   for(let i=0;i<unsorted_array.length;i++)
    { var temp = unsorted_array[i].toString();
      while(temp.length!=max.length)
      {
        temp = "0".concat(temp); 
      }  
        temp2[i] = temp;
    }
    var l = max.length-1;
    creationdiv(max.length);
    for(let i=0;i<max.length;i++)
    {       
      temp2 = sortingforradix(temp2,l-i);
    console.log(temp2);
    renderforradix(temp2,i);
    await sleep(6000);

    }
    
      
  }

function creationdiv(numcount)
{ for(let i = 0;i<numcount;i++)
  {  let element = document.createElement("div");
     element.classList.add("nnew");
     othercontainer.appendChild(element);

  }

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function renderforradix(temp2,num)
{  
    for(let i=0;i<temp2.length;i++)
    {     
      let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = "50px";
    bar.style.width = "50px";
    bar.style.borderRadius = "15px";
    othercontainer.children[num].appendChild(bar);
    othercontainer.children[num].children[i].innerText = temp2[i];
    await sleep(200);

  }
  

}


function disabling()
{
  document.querySelector("#randomize_array_btn").disabled = true;
document.querySelector("#sort_btn").disabled = true;
}

async function bucket(array)
{   disabling();
  document.getElementById("hidethis").style.visibility = "visible";
  let n1=0,n2=0,n3=0,n4=0,n5=0;
    let bucketdiv = document.getElementsByClassName("bucketcontainer");
  for(let i =0;i<unsorted_array.length;i++)
  {   bars_container.children[i].style.backgroundColor = "pink";
       let bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = array[i] * heightFactor + "px";
      if(unsorted_array[i]>=0 && unsorted_array[i]<=20)
    { 
       bucketdiv[0].appendChild(bar);
      bucketdiv[0].children[n1].innerText = array[i];
      n1++;
    }
    if(unsorted_array[i]>20 && unsorted_array[i]<=40)
    { 
       bucketdiv[1].appendChild(bar);
      bucketdiv[1].children[n2].innerText = array[i];
      n2++;
    }
    if(unsorted_array[i]>=41 && unsorted_array[i]<=60)
    { 
      bucketdiv[2].appendChild(bar);
      bucketdiv[2].children[n3].innerText = array[i];
      n3++;
    }
    if(unsorted_array[i]>=61 && unsorted_array[i]<=80)
    {  
        bucketdiv[3].appendChild(bar);
      bucketdiv[3].children[n4].innerText = array[i];
      n4++;
    }
    if(unsorted_array[i]>=81 && unsorted_array[i]<=100){
      bucketdiv[4].appendChild(bar);
      bucketdiv[4].children[n5].innerText = array[i];
      n5++;
    }
    await sleep(speedFactor);
    bars_container.children[i].style.backgroundColor = "aqua";
    
  }
  for(let i=0;i<5;i++)
  {      var temp=[];

   InsertionSortforbucket(temp,i);
   await sleep(speedFactor);
  }
    
} 

 async function InsertionSortforbucket(array,count) {
  var array=[];
  let bucketdiv = document.getElementsByClassName("bucketcontainer");

  for(let j =0;j<bucketdiv[count].children.length;j++)
    { 
      array.push(bucketdiv[count].children[j].innerHTML);

    }
  
  let bars = document.getElementsByClassName("bucketcontainer")[count].children;
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j + 1].style.backgroundColor = "red";
      bars[j + 1].innerText = array[j + 1];
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
        if (k != j + 1) {
          bars[k].style.backgroundColor = "aqua";
        }
      }
      j = j - 1;
    }
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
    bars[j + 1].style.backgroundColor = "lightgreen";
    bars[j + 1].innerText = array[j + 1];
   await sleep(speedFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }

}




async function bubbleSort(array) {
  timecomplexitymethod(1);
  spacecomplexitymethod(3); 
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k !== j && k !== j + 1) {
            bars[k].style.backgroundColor = "aqua";
          }
        }
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        bars[j].style.height = array[j] * heightFactor + "px";
        bars[j].style.backgroundColor = "lightgreen";
        bars[j].innerText = array[j];
        bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        bars[j + 1].innerText = array[j + 1];
        await sleep(speedFactor);
      }
    }
    await sleep(speedFactor);
  }
 
  return array;
}

async function swap(items, leftIndex, rightIndex, bars) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  bars[leftIndex].style.height = items[leftIndex] * heightFactor + "px";
  bars[leftIndex].style.backgroundColor = "lightgreen";
  bars[leftIndex].innerText = items[leftIndex];
  bars[rightIndex].style.height = items[rightIndex] * heightFactor + "px";
  bars[rightIndex].style.backgroundColor = "lightgreen";
  bars[rightIndex].innerText = items[rightIndex];
  await sleep(speedFactor);
}
async function partition(items, left, right) {
  let bars = document.getElementsByClassName("bar");
  let pivotIndex = Math.floor((right + left) / 2);
  var pivot = items[pivotIndex]; //middle element
  bars[pivotIndex].style.backgroundColor = "red";

  for (let i = 0; i < bars.length; i++) {
    if (i != pivotIndex) {
      bars[i].style.backgroundColor = "aqua";
    }
  }

  (i = left), 
    (j = right); 
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await swap(items, i, j, bars); 
      i++;
      j--;
    }
  }
  return i;
}

async function quickSort(items, left, right,checck,counterr) {
   if(checck==0){
  var index;
  let bars = document.getElementsByClassName("bar");
  if (items.length > 1) {
    index = await partition(items, left, right); 
    if (left < index - 1) {
      await quickSort(items, left, index - 1,checck,counterr);
    }
    if (index < right) {
      await quickSort(items, index, right,checck,counterr);
    }
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "aqua";
  }
  return items;
}

else{
  var index;
  let bars = document.getElementsByClassName("bar");
  if (items.length > 1 && counterr!=3) {
    index = await partition(items, left, right); 
    if (left < index - 1) {
      
      await quickSort(items, left, index - 1,checck,counterr+1);
    }
    if (index < right) {
      await quickSort(items, index, right,checck,counterr+1);
    }
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "aqua";
  }

  console.log("applying insertion sort");
InsertionSort(items) ;

}



}

async function InsertionSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j + 1].style.backgroundColor = "red";
      bars[j + 1].innerText = array[j + 1];
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
        if (k != j + 1) {
          bars[k].style.backgroundColor = "aqua";
        }
      }
      j = j - 1;
    }
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
    bars[j + 1].style.backgroundColor = "lightgreen";
    bars[j + 1].innerText = array[j + 1];
    await sleep(speedFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  return array;
}


async function HeapSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    await heapify(array, array.length, i);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    await swap(array, 0, i, bars);
    await heapify(array, i, 0);
  }
  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
    await sleep(speedFactor);
  }
  return array;
}

async function heapify(array, n, i) {
  let bars = document.getElementsByClassName("bar");
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != i) {
    await swap(array, i, largest, bars);
    await heapify(array, n, largest);
  }
}

async function swap(array, i, j, bars) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  bars[i].style.height = array[i] * heightFactor + "px";
  bars[j].style.height = array[j] * heightFactor + "px";
  bars[i].style.backgroundColor = "red";
  bars[j].style.backgroundColor = "red";
  await sleep(speedFactor);

  for (let k = 0; k < bars.length; k++) {
    if (k != i && k != j) {
      bars[k].style.backgroundColor = "aqua";
    }
  }
  bars[i].innerText = array[i];
  bars[j].innerText = array[j];
  return array;
}

//write mergeSort function
async function mergeSort(arr) {
  let bars = document.getElementsByClassName("bar");
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  let actualHalf = await mergeSort(left);
  await mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
     
       bars[k].innerText = arr[k];
    } else {
      arr[k] = right[j];
      j++;
   
    }
    
   
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    if (k + arr.length < bars.length) {
      bars[k + arr.length].style.height = arr[k] * heightFactor + "px";
      console.log(arr[k] * heightFactor);
      bars[k + arr.length].style.backgroundColor = "yellow";
    }
    await sleep(speedFactor);
    bars[k].innerText = arr[k];

    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await sleep(speedFactor);
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await sleep(speedFactor);
    j++;
    k++;
  }

  

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }

  return arr;
}

function mergeSortD(arr, start, end) {
  if (arr.length < 2) {
    return arr;
  
  }

  let middle = Math.floor((start + end) / 2);
  let left = arr.slice(start, middle);
  let right = arr.slice(middle, end);
  mergeSort(right);
  
}

let lastbtn = document.getElementById("lastbtn");
var a;
var b;
lastbtn.addEventListener("click",function(){
 a  = document.getElementById("a").value;
 b  = document.getElementById("b").value;
 
});




function lastalgo(array)
{  // disabling();
  document.getElementById("formforrange").style.visibility = 'visible';
  let iid = document.getElementById("other_container");
  let newdiv = document.createElement('h1');
  let maxforcount = Math.max(...array);
let t1 = new Array(maxforcount).fill(0);
let t2 = new Array(maxforcount).fill(0);
              for(let i=0;i<array.length;i++)
              { if(t1[array[i]] == null)
                  {
                    t1[array[i]] = 1;
                  }
                  else
                  {
                    ++t1[array[i]];
                  }

              }
              //calculating commulative
              for(let i=0;i<t1.length;i++)
              {     if(i==0)
                t2[i] = t1[i];
                else
                t2[i] = t2[i-1]+t1[i];
              }
              let ans;
              if(a<0 || b>maxforcount)
                  ans = t2[b];
                if(a>=0 && b<=maxforcount)
                {
                  ans = t2[b] - t2[a -1];
                }
                if(a>=0 && b>maxforcount)
                ans = t2[maxforcount] - t2[a-1];
              
              newdiv.innerHTML ='Finding in O(1) The elements in range between a: '+ a + ' and b: ' + b +' are '+ ans ;

              iid.insertAdjacentElement('afterbegin',newdiv);
              console.log(t2);


}

function timecomplexitymethod(option)
{
  let n = unsorted_array.length;
  var time = 0;
  let ih = 'The time complexity of this algorithm is ';
  if(option==1)
  { time  = n*n;
  ih = ih+'O(n^2)= '+time;
  }
  if(option==2)
  {  time = n* Math.log(n);
    ih = ih+'O(nlog(n))= '+time;

  }
  if(option==3)
  { time = n*3;
    ih = ih+'O(n*k)= '+time;

  }
  if(option==4)
  {
     time  = n+3;
     ih = ih+'O(n+k)= '+time;

  }
  
  if(option==5)
  {
   time =  n*3 + n * Math.log(n/3) ; 
   ih = ih+'O(n*k + nlog(n/k))= '+time;

}
let insert = document.querySelector('.buttons_container');
let div = document.createElement('h1');
div.innerHTML = ih;
insert.insertAdjacentElement("beforebegin",div);
}


function spacecomplexitymethod(option)
{
  let n = unsorted_array.length;
  var space = 0;
  let ih = 'The space complexity of this algorithm is ';
  if(option==1)
  { space  = 3;
    ih = ih + 'O(k) = '+space;
  }
  if(option==2)
  {  space = n+3;
    ih = ih + 'O(n+k) = '+space;
  }
  if(option==3)
  { space = 1;
    ih = ih + 'O(1) = '+space;

  }
  if(option==4)
  {
     space  = n;
     ih = ih + 'O(n) = '+space;

  }
  
let insert = document.querySelector('.buttons_container');
let div = document.createElement('h1');
div.innerHTML = ih;
insert.insertAdjacentElement("beforebegin",div);
}

sort_btn.addEventListener("click", function () {
  switch (algotouse) {
    case "bubble":
      timecomplexitymethod(1);
      spacecomplexitymethod(3);    
      bubbleSort(unsorted_array);
      break;
    case "merge":
      timecomplexitymethod(2);
      spacecomplexitymethod(4);
        mergeSort(unsorted_array);
          break;
    case "heap":
      timecomplexitymethod(2);
      spacecomplexitymethod(3);
      HeapSort(unsorted_array);
      break;
    case "insertion":
      timecomplexitymethod(1);
      spacecomplexitymethod(3);    
      InsertionSort(unsorted_array);
      break;
    case "quick":
      console.log(unsorted_array.length);
      timecomplexitymethod(2);
      spacecomplexitymethod(4);
      quickSort(unsorted_array, 0, unsorted_array.length - 1,0,0);
      break;
      case "bucket":
        timecomplexitymethod(4);      
      bucket(unsorted_array);
      break;
      case "radix":
        timecomplexitymethod(3);
        spacecomplexitymethod(2);
     radixsort(unsorted_array);
      break;
      case "count":
        timecomplexitymethod(4);
        spacecomplexitymethod(1);
      countsort(unsorted_array);
      break;
      case "improved":
        timecomplexitymethod(5);
        spacecomplexitymethod(4);
        quickSort(unsorted_array, 0, unsorted_array.length - 1,1,0);
        break;
        case "lastalgo":
          timecomplexitymethod(4);
          spacecomplexitymethod(2);
        
        lastalgo(unsorted_array);
        break;
    default:
      bubbleSort(unsorted_array);
      break;
  }
});