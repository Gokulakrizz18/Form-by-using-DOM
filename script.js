function foo(){
    var firstname = document.getElementById("firstname")
    var middlename = document.getElementById("middlename")
    var lastname = document.getElementById("lastname")
    var email = document.getElementById("email")
    var button = document.getElementById("button")

    console.log(`FirstName:${firstname},MiddleName:${middlename},LastName:${lastname},Email:${email}`)
}


function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content
    return ele;
}

function break_create(){
    var ele = document.createElement("br")
    return ele;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value,content){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element;
}
var firstname_label = label_create("label","for","firstname","Firstname");
var firstname_break = break_create();
var firstname_input = input_create("input","type","text","firstname","id","firstname")

var break1 = break_create();

var middlename_label = label_create("label","for","middlename","middlename");
var middlename_break = break_create();
var middlename_input = input_create("input","type","text","middlename","id","middlename")

var break2 = break_create();

var lastname_label = label_create("label","for","lastname","lastname");
var lastname_break = break_create();
var lastname_input = input_create("input","type","text","lastname","id","lastname")

var break3 = break_create();

var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");

var break4 = break_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.setAttribute("onclick","foo()")
button.innerHTML = "clickme"

document.body.append(firstname_label,firstname_break,firstname_input,break1,middlename_label,middlename_break,middlename_input,break2,lastname_label,lastname_break,lastname_input,break3,email,email_break,email_input,break4,button)