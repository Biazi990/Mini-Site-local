'use strict'

const switcher = document.querySelector('.bota');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    var className = document.body.className;
    if(className == 'ligth-theme'){
        this.texContent = 'dark';

    }
    else
    this.texContent = 'Ligth';

});



