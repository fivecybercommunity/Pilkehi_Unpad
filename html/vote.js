function pilih(x) {
    switch(x) {
        case 1:
            document.getElementById("wrapperSatu").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-success";
            document.getElementById("wrapperDua").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";
            document.getElementById("wrapperTiga").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";
            console.log("nomor satu");
            break;
        case 2:
            document.getElementById("wrapperSatu").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";
            document.getElementById("wrapperDua").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-success";
            document.getElementById("wrapperTiga").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";    
            console.log("nomor dua");
            break;
        case 3 :
            document.getElementById("wrapperSatu").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";
            document.getElementById("wrapperDua").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-secondary";
            document.getElementById("wrapperTiga").className = "my-5 col-lg-3 mx-5 d-flex flex-column align-items-center border-bottom pb-2 border-3 border-success";
            console.log("nomor tiga");
            break;
        default :
            console.log("apa?");
    }
}

function kirim() {
    document.getElementById("submit").click();
}

function logout() {
    document.getElementById("logout").click();
}