var productList=[]; //array

setInterval(function()
{
    var date=new Date();
    document.getElementById('todaydate').innerText=date.toLocaleTimeString();
}, 1000);

function addProduct(){
            var status=validate();
            //alert(status)
            if(status){
                document.getElementById('msg').innerHTML='<span style="color:green;">Product added</span>';
                showProducts();
            }
            else
            document.getElementById('msg').innerHTML='<span style="color:red;">Error!!</span>';
           
     
 }

 function validate(){
     var flag=false;
     var pfirst= document.getElementById('firstpname').value;
    var plast= document.getElementById('lastpname').value;
    var page= document.getElementById('age').value;
    var leaving= document.getElementById('from').value;
    var to=document.getElementById('to').value;
     if (pfirst != '' && plast!='' && page !='' && leaving!='Select' && to!='Select')
     flag=true;

     return flag;
         
 }


 function showProducts(){
    //json-{key:value}
    //()-methods
    //{}-object
    //[]-array
    //[{}]-array of objects

    var flag=false;
    
    var pfirst= document.getElementById('firstpname').value;
    var plast= document.getElementById('lastpname').value;
    var page= document.getElementById('age').value;
    var leaving= document.getElementById('from').value;
    var to=document.getElementById('to').value;
    productList.push({"first":pfirst,"last":plast,"age":page,"leave":leaving, "too":to})

    var tableHeader='<table><thead><tr><th>first</th><th>last</th><th>age</th><th>leave</th><th>too</th></tr></thead>'
    var tableBody='';
    for(let i=0;i<productList.length;i++){

        tableBody=tableBody+'<tr><td>'+productList[i].first+'</td><td>'+productList[i].last+'</td><td>'+productList[i].age+'</td><td>'
+productList[i].leave+'</td><td>'+productList[i].too+'</td><td></tr>';  

    }

    document.getElementById('productdata').innerHTML=tableHeader+tableBody+'</table>';


 }