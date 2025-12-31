document.addEventListener('DOMContentLoaded', () => {
    
    
    const btnCheck = document.getElementById('btn-check');
    const bonusResult = document.getElementById('bonus-result');
    
    const btnWork = document.getElementById('btn-work');
    const workResult = document.getElementById('work-result');

    
    btnCheck.addEventListener('click', () => {
        
        bonusResult.style.display = 'block';
    });

    
    btnWork.addEventListener('click', () => {
        
        btnWork.innerHTML = '✔️ ПРИЙНЯТО';
        
        
        btnWork.classList.remove('btn-red');
        btnWork.classList.add('btn-green');
        
        btnWork.disabled = true;
        
        workResult.style.display = 'block';
    });

});
