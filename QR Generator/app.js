const qrInput = document.getElementById("qr-text");
const qrImage = document.getElementById("qr-image");
const qrGenerateBtn = document.getElementById("qr-generate-btn");

let qrApiLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

qrGenerateBtn.addEventListener("click", () => {
    if(qrInput.value !== ""){
        let yourQrApiLink = qrApiLink + qrInput.value;
        qrImage.src = yourQrApiLink;
    }
    else{
        qrImage.src = "";
        qrInput.classList.add("error");
        setTimeout(() => {
            qrInput.classList.remove("error");
        }, 500);
    }
})