const listBox = document.querySelector("#list");
const item = document.querySelector("#task");
let items = [];
//add all li element to array with forEach
items.forEach((item) => {
    createItem(item);
    });
// when you click the li item, it will be checked
listBox.addEventListener("click", (item)  => {
    if (item.target.tagName = "li") {
        item.target.classList.toggle("checked");
    }
});
//you can see what you write the input section
function newElement () {
    
    if (item.value === "" || item.value === " ") { // if item is empty, show toast error message
            $(".error").toast("show");
            
    }else{  // else show success toast message and run creat function
        $(".success").toast("show");
        createItem(item);    
        
    }
}
//create new element
function createItem(item) {
    let li = document.createElement("li");
        let text = document.createTextNode(item);
        li.appendChild(text);
        listBox.appendChild(li);
        li.innerHTML = item.value;
        localStorage.setItem(item.value, item.value);
        item.value = "";
        let span = document.createElement("span");
        let removeBtn = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(removeBtn);
        li.appendChild(span);
        
// when you click x button you can remove li element
        span.onclick = () => {
            span.parentElement.remove();
        }
}





