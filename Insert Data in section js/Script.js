
let form = document.querySelector("form")
let AddNewBtn = document.querySelector("#addnew")
let EnterBtn = document.querySelector(".Enter-btn")
let sectionForm = document.querySelector("#modals")
let closebtn = document.querySelector("#closebtn")
let inputs = document.querySelectorAll("form input")
let mainitem = document.querySelector("#main-item")
let EditeFormBtn = form.querySelector(".form-edite")
let DataArry = [];
let URL = ""
AddNewBtn.addEventListener("click", function(){
    sectionForm.classList.add("show")
})
closebtn.addEventListener("click", function(){
    sectionForm.classList.remove("show")
})
if(localStorage.getItem("DataArry") != null){
    DataArry = JSON.parse(localStorage.getItem("DataArry"))
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    let chechkEmail = DataArry.find((data)=>data.Email == inputs[1].value);
    if(chechkEmail == undefined){
        
    DataArry.push(
        {
            Name : inputs[0].value,
            Email : inputs[1].value,
            mobile : inputs[2].value,
            dob : inputs[3].value,
            password : inputs[4].value,
            profile : URL == "" ? "images/download.jpeg" : URL,
        }
    );
        localStorage.setItem("DataArry", JSON.stringify(DataArry));
        // Show success message 
        Swal.fire({
        title: "Good job!",
        text: "Data Inserted Successfully!",
        icon: "success"
        });
        form.reset();
        sectionForm.classList.remove("show")
        GetRegData() 
    }else{
         // Show success message 
         Swal.fire({
            title: "Email Already exists",
            text: "failed!",
            icon: "warning"
            });
    }
})

function GetRegData() {
    mainitem.innerHTML = "";

    DataArry.forEach((data, index)=>{
        let dataStr = JSON.stringify(data)
        let finalData = dataStr.replace(/"/g,"'");
        mainitem.innerHTML += `
    <div class="col fw-lighter fs-6 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-2 col-style color-bg">
    <div class="sr-number box text-center">${index + 1}</div>
    <div class="profile text-center"><img src="${data.profile}" alt="" width="50" class="rounded-circle" height="50"></div>
    <div class="name box text-center">${data.Name}</div>
    <div class="email box text-center">${data.Email}</div>
    <div class="mobile box text-center">${data.mobile}</div>
    <div class="date box text-center">${data.dob}</div>
    <div class="action box text-center">
      <button class="btn btn-primary box box edite-btn" index="${index}" data="${finalData}"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="btn btn-danger" id="delet" index="${index}"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
    `;
    })
    RemoveData()
} 

// delet data 
function RemoveData(){
    let AllDeletBtn = mainitem.querySelectorAll("#delet")
    AllDeletBtn.forEach(delet=>{
        delet.addEventListener("click", async function(){
                let isConsform = await ConformDataDelet();
          if(isConsform){
            let index = delet.getAttribute("index")
            DataArry.splice(index, 1)
            localStorage.setItem("DataArry", JSON.stringify(DataArry))
            GetRegData()
          }
})
})

let AllEditeData = mainitem.querySelectorAll(".edite-btn")
AllEditeData.forEach(btn=>{
    btn.addEventListener("click", function(){
        let index = btn.getAttribute("index")
        let dataStr = btn.getAttribute("data")
        let finalData = dataStr.replace(/'/g,'"');
        let data = JSON.parse(finalData)
        console.log(data)
        AddNewBtn.click();
        inputs[0].value = data.Name;
        inputs[1].value = data.Email;
        inputs[2].value = data.mobile;
        inputs[3].value = data.dob;
        inputs[4].value = data.password;
        EditeFormBtn.style.pointerEvents = "auto"
        EditeFormBtn.style.opacity = "1"
        EnterBtn.disabled = true;
        EditeFormBtn.disabled = false;
        EditeFormBtn.addEventListener("click", function(){
            DataArry[index] =  {
                Name : inputs[0].value,
                Email : inputs[1].value,
                mobile : inputs[2].value,
                dob : inputs[3].value,
                password : inputs[4].value,
                profile : URL == "" ? "images/download.jpeg" : URL,
            }
            localStorage.setItem("DataArry", JSON.stringify(DataArry));
            // Show success message 
            Swal.fire({
            title: "Good job!",
            text: "Data Updated Successfully!",
            icon: "success"
            });
            form.reset();
            sectionForm.classList.remove("show")
            EnterBtn.disabled = false;
        EditeFormBtn.disabled = true;
            GetRegData() 
        })
    })
})
    
}

GetRegData()


// reading profile 
inputs[5].onchange = () =>{
    let FReader = new FileReader();
    FReader.readAsDataURL(inputs[5].files[0]);
    FReader.onload = (e) =>{
        URL = e.target.result;
    }
}

function ConformDataDelet(){
    return new Promise((resolve, reject)=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                resolve(true)
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                reject(false)
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
          
    });
}