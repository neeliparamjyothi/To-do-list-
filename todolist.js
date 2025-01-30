let addbtn=document.getElementById("add2");
let task=document.getElementById("task");
addbtn.addEventListener("click",function(){
    let matter=document.createElement("button");
    matter.classList.add("ma");
    let checkbox=document.createElement("input");
    let del=document.createElement("button");
    del.classList.add("delete");
    del.innerText="Delete";
    checkbox.type='checkbox';
    checkbox.id="checkbox1";
    let label=document.createElement('label');
    label.appendChild(document.createTextNode(task.value));
    del.style.cssText="float:right;width:50px;height:20px;margin-top:1.7px;background-color: plum;border-radius:5px;"
    checkbox.style.cssText="float:left;"
    label.style.cssText="float:left;margin-top:2px;"
    matter.style.cssText="border: 1px solid white;border-radius: 5px;width:320px;height: 35px;background-color:white; margin-left: 400px; margin-top: 15px;"
    matter.appendChild(checkbox);
    matter.appendChild(label);
    matter.appendChild(del);
    document.body.appendChild(matter);
    task.value="";

});
document.body.addEventListener('click',(event)=>{
    if(event.target.textContent == "Delete")
    {
        let item=event.target.parentElement;
        item.remove();
        confirm('Yohoo!..Your task completed..');
    }
});