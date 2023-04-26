const login = document.getElementById('login');

login.addEventListener('click', function(){
    
    const name = document.getElementById('accName');
    const pass = document.getElementById('pass');

    if(name.value == "" && pass.value == "")
    {
        name.style.border = 'thin solid red';
        pass.style.border = 'thin solid red';
    }
    else if(name.value == "" && pass.value != "")
    {
        name.style.border = 'thin solid red';
        pass.style.border = 'thin solid blue';  
    }
    else if(name.value != "" && pass.value == "")
    {
        name.style.border = 'thin solid blue';
        pass.style.border = 'thin solid red';  
    }
    else
    {
        document.getElementById('submitArea').style.display = 'none';
        document.getElementById('transArea').style.display = 'block';
    }
})


const depBtn = document.getElementById('deposit');
const withBtn = document.getElementById('withdraw');

const deposit = document.getElementById('depo');
const withdraw = document.getElementById('with');

const jomaTaka = document.getElementById('joma');
const tolaTaka = document.getElementById('tola');
const motTaka = document.getElementById('mot');

depBtn.addEventListener('click', function(){
    const input_1 = parseFloat(deposit.value);
    const total_1 = parseFloat(jomaTaka.innerText);
    const total_2 = parseFloat(motTaka.innerText);

    const total = input_1 + total_1;

    jomaTaka.innerText = total;

    deposit.value = "";

    const balance = total_2 + input_1;

    motTaka.innerText = balance;
})

withBtn.addEventListener('click', function(){
    const input_2 = parseFloat(withdraw.value);
    const total_3 = parseFloat(tolaTaka.innerText);
    const total_4 = parseFloat(motTaka.innerText);

    const toTal = input_2 + total_3;

    tolaTaka.innerText = toTal;

    withdraw.value = "";

    const baLance = total_4 - input_2;

    motTaka.innerText = baLance;
})