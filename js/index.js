function page_transition(val){
    if(val === 'index'){
        location.href = './index.html';
    }
    if(val === 'free'){
        location.href = './freeinput.html';
    }
    if(val === 'free_result'){
        const frequency =document.getElementById('free_frequency_selection').value;
        const deposit = document.getElementById('free_deposit').value;
        const bonus = document.getElementById('free_bonus').value;
    
        sessionStorage.setItem('frequency', frequency);
        sessionStorage.setItem('deposit', deposit);
        sessionStorage.setItem('bonus', bonus);
        location.href = './freeinput_result.html';
    }
    if(val === 'select_money'){
        location.href = './select_money.html';
    }
    if(val === 'select_money_calc'){
        location.href = './select_money_result.html';
    }
}