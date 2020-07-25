var list= document.getElementById('list');
function addTodo(){
    var a=document.getElementById('todo-item');
    var li=document.createElement('li');
    li.setAttribute("class","li-item")
    var liText=document.createTextNode(a.value.toUpperCase());
    li.appendChild(liText);

    var delBtn=document.createElement('button');
    var delText= document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("id","my-delete")
    delBtn.setAttribute("onclick","del_item(this)");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);

    var editBtn=document.createElement('button');
    var editText=document.createTextNode("EDIT");
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("id","my-edit")
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);

    list.appendChild(li);
    a.value=""
}

function del_item(x){
    x.parentNode.remove();
}

function deleteAll(){
    list.innerHTML="";
}
function editItem(y){
    var val=y.parentNode.firstChild;
    var editvalue=prompt("Enter new task", val);
    editvalue=editvalue.toUpperCase();
    y.parentNode.firstChild.nodeValue=editvalue;
}
