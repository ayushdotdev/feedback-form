const selectElement = (selector) =>{
    const element=document.querySelector(selector);
    if(element) return element;
    else throw new Error(`Something went, make that ${selector} exists or typed correctly`);
}

const submit=selectElement('#submit');

const submitThankyou=()=>{
    const thankyou=selectElement('#card');
    const secondPage=selectElement('#secondPage');
    thankyou.classList.add('submitted');
    secondPage.classList.add('display')
};

submit.addEventListener('click',submitThankyou);

