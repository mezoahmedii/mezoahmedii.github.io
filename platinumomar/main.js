function checkem() {
    if (document.getElementById("atoz").checked) {
    document.getElementById("DIVATOZ").style.display = "inline"
    document.getElementById("DIVZTOA").style.display = "none"
} else if (document.getElementById("ztoa").checked) {
    document.getElementById("DIVZTOA").style.display = "inline"
    document.getElementById("DIVATOZ").style.display = "none"
}

}

setInterval(() => {
    checkem()
}, 10);

