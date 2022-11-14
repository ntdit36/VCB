const btn_submit = document.querySelector(".btn_submit")


const money = document.querySelector(".money")
const time = document.querySelector(".time")
const time_day = document.querySelector(".time_day")
const date = document.querySelector(".date")
const to_name = document.querySelector(".to_name")
const to_bank_number = document.querySelector(".to_bank_number")
const code_bill = document.querySelector(".code_bill")
const desc_bill = document.querySelector(".desc_bill")

function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}




const user = JSON.parse(localStorage.getItem("user"));
console.log(user);


money.innerHTML = `${formatCash(user.money)} VND`
to_name.innerHTML = user.to_name.toUpperCase()
to_bank_number.innerHTML = user.to_bank_number
code_bill.innerHTML = user.code_bill
desc_bill.innerHTML = user.desc_bill
time.innerHTML = user.time




btn_submit.addEventListener("click", (e) => {
    e.preventDefault();

    const img_html = document.querySelector(".prview_bill")

    html2canvas(img_html).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "bill.jpg");
        anchor.click();
        anchor.remove();
    })

})