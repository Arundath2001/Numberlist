let nums = [];
function addNum() {
    let inputField = document.getElementById("inputnum");
    let number = parseFloat(inputField.value);

    if (isNaN(number)) {
        alert("Enter a number !");
        inputField.value = '';
    }else{

        nums.push(number);
        inputField.value = ''; 
        display(); 
        calculate(); 
    }
}
function display() {
    let list = document.getElementById("display");
    list.innerHTML = '';

    for (let i = 0; i < nums.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = nums[i]+ ",";
        list.appendChild(listItem);
    }
}

function calculate() {
    let total = 0;
    let largenum = nums[0];
    let smallnum = nums[0];

        for (let i = 0; i < nums.length; i++) {
        total += nums[i];

        if (nums[i] > largenum) {
            largenum = nums[i];
        }

        if (nums[i] < smallnum) {
            smallnum = nums[i];
        }
    }
    let avg = total / nums.length;
    document.getElementById("total").textContent = total;
    document.getElementById("avg").textContent = avg;
    document.getElementById("smallnum").textContent = smallnum;
    document.getElementById("largenum").textContent = largenum;
    
}