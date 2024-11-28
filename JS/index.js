
var ProuductNameInput=document.getElementById("ProuductName")
var ProuductPriceInput=document.getElementById("ProuductPrice")
var ProuductCategoryInput=document.getElementById("ProuductCategory")
var ProuductDescriptionInput=document.getElementById("ProuductDescription")
var SearchProductInput=document.getElementById("SearchProduct")
var addbtn=document.getElementById("add")
var updatebtn=document.getElementById("upd")
var indexupdate;

var ProuductContainer=[]

if(localStorage.getItem("product")!= null){


ProuductContainer=JSON.parse(localStorage.getItem("product"))
displayData()}

function addprouduct(){
    if( valodatinfun()==true &&valodatinPrice()==true){  
        var product = {
        name:ProuductNameInput.value,
        price:ProuductPriceInput.value,
        category:ProuductCategoryInput.value,
        description:ProuductDescriptionInput.value,
    }
    ProuductContainer.push(product)
    localStorage.setItem("product",JSON.stringify(ProuductContainer))
    // console.log(ProuductContainer)
    displayData()}
  
}

function displayData(){
    var cartona='';
    for( var i=0;i<ProuductContainer.length;i++){
        cartona+=`
        <tr>
                        <td> ${ProuductContainer[i].name}</td>
                        <td>${ProuductContainer[i].price}</td>
                        <td>${ProuductContainer[i].category}</td>
                        <td>${ProuductContainer[i].description}</td>
                        <td>
                            <button class=" btn btn-outline-warning btn-sm" onclick="SetData(${i})">Update</button>
                            <button class=" btn btn-outline-danger btn-sm" onclick="deleteData(${i})">Delete</button>
                        </td>
                     </tr>
        
        
        `

    }
    document.getElementById("tableData").innerHTML=cartona;
}
function deleteData( elementnum){
    ProuductContainer.splice(elementnum,1)
    localStorage.setItem("product",JSON.stringify(ProuductContainer))
    displayData()

}
function SearchData(){
    var term=SearchProductInput.value;
   
    var cartona='';
    for( var i=0;i<ProuductContainer.length;i++){
        if(ProuductContainer[i].name.toLowerCase().includes(term.toLowerCase() ) ){
         
        cartona+=`
        <tr>
                        <td> ${ProuductContainer[i].name}</td>
                        <td>${ProuductContainer[i].price}</td>
                        <td>${ProuductContainer[i].category}</td>
                        <td>${ProuductContainer[i].description}</td>
                        <td>
                            <button class=" btn btn-outline-warning btn-sm">Update</button>
                            <button class=" btn btn-outline-danger btn-sm" onclick="deleteData(${i})">Delete</button>
                        </td>
                     </tr>
        
        
        `
        }
    }
    document.getElementById("tableData").innerHTML=cartona;
}

function SetData(index){
    var indexupdate=index;
    var currentprouduct=ProuductContainer[index];
    ProuductNameInput.value=currentprouduct.name;
    ProuductPriceInput.value=currentprouduct.price;
    ProuductCategoryInput.value=currentprouduct.category;
    ProuductDescriptionInput.value=currentprouduct.description;
    updatebtn.classList.remove("d-none");
    addbtn.classList.add("d-none")
}
function UpdateData(){
    var product = {
        name:ProuductNameInput.value,
        price:ProuductPriceInput.value,
        category:ProuductCategoryInput.value,
        description:ProuductDescriptionInput.value,
    }
    ProuductContainer.splice(indexupdate,1,product)
    localStorage.setItem("product",JSON.stringify(ProuductContainer))
    displayData()
    updatebtn.classList.add("d-none");
    addbtn.classList.remove("d-none")
}

function valodatinfun(){
    var regexName=/^[A-Z][a-z]{2,8}$/;
    var test=ProuductNameInput.value;
    var pinput=document.getElementById("messageName");
    if(regexName.test(test)==true){
        ProuductNameInput.classList.add('is-valid')
        ProuductNameInput.classList.remove('is-invalid')
        pinput.classList.add("d-none")
    }else{
        ProuductNameInput.classList.add('is-invalid')
        ProuductNameInput.classList.remove('is-valid')
        pinput.classList.remove("d-none")
    }
}
function valodatinPrice(){
    var regexPrice=/^[0-9]{2,4}$/;
    var test=ProuductPriceInput.value;
    var pprice=document.getElementById("messagePrice");
    if(regexPrice.test(test)==true){
        ProuductPriceInput.classList.add('is-valid')
        ProuductPriceInput.classList.remove('is-invalid')
        pprice.classList.add("d-none")
    }else{
        ProuductPriceInput.classList.add('is-invalid')
        ProuductPriceInput.classList.remove('is-valid')
        pprice.classList.remove("d-none")
    }
}