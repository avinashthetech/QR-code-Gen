const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".from input"),
generateBtn=wrapper.querySelector(".from button"),
qrImg=wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click",()=>{

    let qrValue=qrInput.value;
    if(!qrValue) return;//if the input is empty then return from here
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    generateBtn.innerText="Generating QR Code......";
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR Code";

    });
});

qrImg.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.add("active");
    
}
});
