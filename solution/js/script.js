// Write solution code here to dynamically add the form fields 
// define funtion submitOrder() to save the order details on clicking the submit button

let button = document.getElementById("button");
let arr = [];
button.onclick=()=>{
  let category = document.getElementById("Category");
  let input = document.createElement("input");
  input.style.border = "0";
  input.style.marginBottom="15px";
  input.style.borderBottom = "2px solid";
  category.appendChild(input);
  

  let item = document.getElementById("Item");
  let input1 = document.createElement("input");
  input1.style.border = "0";
  input1.style.marginBottom="15px";
  input1.style.borderBottom = "2px solid";
  item.appendChild(input1);

  let price = document.getElementById("Price");
  let input2 = document.createElement("input");
  input2.style.border = "0";
  input2.style.borderBottom = "2px solid";
  input2.style.marginBottom="15px";
  price.appendChild(input2);

  let quantity = document.getElementById("Quantity");
  let input3 = document.createElement("input");
  input3.style.border = "0";
  input3.style.borderBottom = "2px solid";
  input3.style.marginBottom="15px";
  quantity.appendChild(input3);

  let amount = document.getElementById("Amount");
  let input4 = document.createElement("input");
  input4.style.border = "0";
  input4.style.borderBottom = "2px solid";
  input4.style.marginBottom="15px";
  amount.appendChild(input4);

  input1.onkeydown = (kav) => { 
    if (kav.key === "Enter"){   
    if (input.value==="starters" && input1.value === "garlic bread") 
    input2.value = "2.8";

    else if (input.value==="" && input1.value === "garlic bread")
    alert("Please enter the Category");

    else if (input.value==="starters" && input1.value === "")
    alert("Please enter the Item Name");

    else if (input.value==="starters" && input1.value === "starters")
    alert("Sorry you entered category in Item name");

    else if (input.value==="Main Meal" && input1.value === "Main Meal")
    alert("Sorry you entered category in Item name");

    else if (input.value==="Main Meal" && input1.value === "garlic bread")
    alert("Sorry Garlic Bread comes under Starters");

    else if (input.value==="starters" && input1.value === "veg Family Meal")
    alert("Sorry veg Family Meal comes under Main Meal");

    else if(input.value==="Main Meal" && input1.value==="veg Family Meal")
    input2.value="13";

    else if (input.value==="" && input1.value === "veg Family Meal")
    alert("Please enter the Category");

    else if (input.value==="Main Meal" && input1.value === "")
    alert("Please enter the Item Name");
    }
    input2.readOnly = true;
  };
  input3.addEventListener('keyup',(kav) => {
    if (input3.value > 0) {
      input4.value = input3.value * input2.value;
      input4.readOnly = true;
    }
    if (kav.key === "Enter") {
    let inputValues = {
      category: input.value,
      item: input1.value,
      price: input2.value,
      quantity: input3.value,
      amount: input4.value
    }
    arr.push(inputValues);
  }
   });

  let a = document.getElementById("addbutton");
  let input5 = document.createElement("p");
  let input6 = document.createElement("button");
  input6.textContent = "Add";
  input6.style.marginLeft = "50px";
  input6.style.display = "flex";
  input6.style.borderRadius = "50%";
  a.appendChild(input5);
  a.appendChild(input6);

  input6.addEventListener('click', (kav) => {
    kav.preventDefault();
    let w = document.getElementById("kav");
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
      a=a+ parseFloat(arr[i].amount);
    }
    console.log(a);
    w.value = a;
    w.readOnly="true";
    input6.removeEventListener('click',(kav)=>{});
    let order=document.getElementById("ordernow");
    order.onclick=()=>{
      alert("Total Amount to be Paid:$"+Math.round(w.value));
    }
  });
};

console.log(arr);
  
// do not delete the code given below, it is written to export the functions to be tested
// module.exports = submitOrder;
