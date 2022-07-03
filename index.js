const submit = document.querySelector('[type="submit"]');
const allInputs = document.querySelectorAll("input");


function checkValidity(e) {
    let input = e;
    if (e.target) {
        input = e.target;
    }
    const associatedErr = document.querySelector(`.${input.className}Err`);
    const ukPhoneNumber = /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/;
    
    if (!input.value || (input.className=="telNumber" && !input.value.match(ukPhoneNumber))) {
        input.style.border = "2px solid red"
        associatedErr.classList.add("revealErr");
    } else {
        input.style.border = "2px solid black";
        associatedErr.classList.remove("revealErr");
    }
    console.log(e);
    console.log(e.target);
    console.log(associatedErr);

    
}

for (let index = 0; index < allInputs.length - 1; index++) {
    const input = allInputs.item(index);
    input.addEventListener('focusout', (event) => {
        checkValidity(event);
    });
}

submit.onclick = () => {
    for (let index = 0; index < allInputs.length - 1; index++) {
        const input = allInputs.item(index);
        checkValidity(input);
    }
};
