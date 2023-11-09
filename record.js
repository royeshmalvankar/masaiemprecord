// fill in javascript code here
let Mf = document.querySelector('form');
let Name = document.getElementById('name');
let empID = document.getElementById('employeeID');
let Dep = document.getElementById('department');
let Exp = document.getElementById('exp');
let email = document.getElementById('email');
let mob = document.getElementById('mbl')
let tbody = document.querySelector('tbody');


let md = [];
Mf.addEventListener('submit',function(e)
{
    e.preventDefault()

    let d ={};
    d.name = Name.value;
    d.id = empID.value;
    d.dep = Dep.value;
    d.exp = Exp.value;
    d.mail = email.value;
    d.mb = mob.value;
    d.tb = tbody.value;
    md.push(d)
    console.log(md)

    
    tbody.innerHTML = null;


    md.map((ele) =>
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let role = document.createElement("td")

        if(ele.exp > 5){
            role.innerText = "Senior"
        }else if(ele.exp > 2 && ele.exp <=5){
            role.innerText = "Junior"
        }else if (ele.exp <= 1){
            role.innerText="Fresher"
        }


        td1.innerText = ele.name;
        td2.innerText = ele.id;
        td3.innerText = ele.dep;
        td4.innerText = ele.exp;
        td5.innerText = ele.mail;
        td6.innerText = ele. mb;
        row.append(td1, td2, td3, td4, td5, td6,role)
        tbody.append(row)
        
    })



})