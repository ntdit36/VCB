const btn_submit = document.querySelector(".save_local")


const money = document.querySelector(".money")
const time = document.querySelector(".time")
const date = document.querySelector(".date")
const to_name = document.querySelector(".to_name")
const to_bank = document.querySelector(".to_bank")
const to_bank_number = document.querySelector(".to_bank_number")
const code_bill = document.querySelector(".code_bill")
const desc_bill = document.querySelector(".desc_bill")


btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    const user = {
        "money": money.value,
        "time": time.value,
        "date": date.value,
        "to_name": to_name.value,
        "to_bank_number": to_bank_number.value,
        "code_bill": code_bill.value,
        "desc_bill": desc_bill.value,
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./review_bill.html"

})