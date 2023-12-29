
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let statusInput = document.getElementById('status');

let btn = document.getElementById('submit-btn');

let activeUl = document.getElementById('active-ul');
let completeUl = document.getElementById('complete-ul');
let cancelUl = document.getElementById('cancel-ul');

let tokenData = [];

// activeTokenHandler();


btn.addEventListener('click', function(e){
  e.preventDefault();

  let activeInputValues = {
    id: tokenData.length + 1,
    name: nameInput.value,
    phone: phoneInput.value,
    status: statusInput.value,
  }
  
  tokenData.push(activeInputValues);
  // activeTokenHandler();
  tokenHandler();

  document.getElementById('token-form').reset();
})


// Create Li Element;
function myLiElement(id, name, phone) {
  return `<li>
            <div class="left">
              <p>${name}</p>
              <span>${phone}</span>
            </div>
            <div class="right">
              <a href="#">Token No: ${id}</a>
            </div>
          </li>`;
}


function tokenHandler(){
  
  let activeTokenElements = [];
  
  let ulElements = [
    {
      status: 'active',
      ul: activeUl,
      liElements: []
    },
    {
      status: 'complete',
      ul: completeUl,
      liElements: []
    },
    {
      status: 'cancel',
      ul: cancelUl,
      liElements: []
    }
  ];

  



}


// Active handler;
function activeTokenHandler() {
  let activeTokens = tokenData.filter((item) => {
    return item.status == 'active';
  })

  let activeTokenElements = [];

  activeTokens.forEach((item) => {
    activeTokenElements.push(myLiElement(item.id, item.name, item.phone));
  })

  // let innerElement = () => {
  //   if(activeTokenElements.length == 0) {
  //     return `<li class="empty-error d-block">
  //               <span class="d-block text-center">No Data Found</span>
  //             </li>`;
  //   } else {
  //     return activeTokenElements.join('')
  //   }
  // }
  
  // activeUl.innerHTML = innerElement();


  if(activeTokenElements.length == 0) {
    activeUl.innerHTML = `<li class="empty-error d-block">
                <span class="d-block text-center">No Data Found</span>
              </li>`;
    } else {
      activeUl.innerHTML = activeTokenElements.join('')
    }


  document.getElementById('total-active').innerHTML = activeTokenElements.length;
}

// function completeTokenHandler() {
//   let completeTokens = tokenData.filter((item) => {
//     return item.status == 'active';
//   })

//   let completeTokenElements = [];

//   completeTokens.forEach((item) => {
//     completeTokenElements.push(myLiElement(item.id, item.name, item.phone));
//   })

//   if(activeTokenElements.length == 0) {
//     completeUl.innerHTML = `<li class="empty-error d-block">
//                 <span class="d-block text-center">No Data Found</span>
//               </li>`;
//     } else {
//       completeUl.innerHTML = activeTokenElements.join('')
//     }


//   document.getElementById('total-complete').innerHTML = completeTokenElements.length;
// }