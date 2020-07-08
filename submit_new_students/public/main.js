const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){
    //HTML will automatically put the form back to its initial state
    //unless we do 
    ev.preventDefault();
    // programmatically we can reset it 
    document.getElementById('form-user').reset();
    //if you want to do anything else...
}

const send = function(ev){
    ev.preventDefault(); 
    ev.stopPropagation();
    //or the click will travel to the form and the form will submit
    let fails = validate();
    //IF we wanted to do some async things then use a Promise with .then and .catch
    if(fails.length === 0){
        //good to go
        document.getElementById('form-user').submit();
    }else{
        //there are some errors to display
        //bad user
        //let err = document.querySelector('.error');
        //let input = err.querySelector('input');
        //err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}

const validate = function(ev){
    //let valid = true;
    let failures = [];

    //inputs for text, email, tel, color, number...
    let first = document.getElementById('input-first-name');
    let last = document.getElementById('input-last-name');
    let nationality = document.getElementById('input-nationality');
    let age = document.getElementById('input-age');
    let id = document.getElementById('input-id');
    //.value, .defaultValue, length of value
    if( first.value === ""){
        failures.push({input:'input-first-name', msg:'Required Field'})
    } 
    if( last.value === ""){
        failures.push({input:'input-last-name', msg:'Required Field'})
    } 
    if( nationality.value === ""){
        failures.push({input:'input-nationality', msg:'Required Field'})
    }
    if( age.value === ""){
        failures.push({input:'input-age', msg:'Required Field'})
    }
    if( id.value === ""){
        failures.push({input:'input-id', msg:'Required Field'})
    }
    //return a boolean || an object with details about the failures
    return failures;
}


document.addEventListener('DOMContentLoaded', init);