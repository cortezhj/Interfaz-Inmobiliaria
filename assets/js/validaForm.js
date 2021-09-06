let regPhone = /[0-9]\d{9}/,
    regName = /^[a-zA-Z ]+$/,
    phone = document.querySelector('#phone'),
    name = document.querySelector('#name'),
    btn = document.querySelector('#btnSend'),
    comment = document.querySelector('#comment'),
    pass = document.querySelector('#pass'),
    form = document.querySelector('#form'),
    btn2 = document.querySelector('#btn'),
    name2 = document.querySelector('#name2'),
    phone2 = document.querySelector('#phone2')

function phoneValid()
{
    if (!regPhone.test(phone.value)) 
    {
        phone.style.border = '1px solid tomato'
        phone.style.outline = 'none'
        btn.style.background = 'tomato'
        btn.disabled = true
        btn.style.cursor = 'not-allowed'
    } 
    else
    {
        phone.style.border = '1px solid teal'
        phone.style.outline = 'none'
        btn.style.background = 'teal'
        btn.disabled = false
        btn.style.cursor = 'pointer'
    }
} 

function commentValid()
{
    if (comment.value.length < 5)
    {
        comment.style.border = '1px solid tomato'
        comment.style.outline = 'none'
        btn.style.background = 'tomato'
        btn.disabled = true
        btn.style.cursor = 'not-allowed'
    }
    else
    {
        comment.style.border = '1px solid teal'
        comment.style.outline = 'none' 
        btn.style.background = 'teal'
        btn.disabled = false
        btn.style.cursor = 'pointer'
    }
}

function nameValid()
{
    if (!regName.test(name.value)) 
    {
        name.style.border = '1px solid tomato'
        name.style.outline = 'none'
        btn.style.background = 'tomato'
        btn.disabled = true
        btn.style.cursor = 'not-allowed'
    } 
    else
    {
        name.style.border = '1px solid teal'
        name.style.outline = 'none'
        btn.style.background = 'teal'
        btn.disabled = false
        btn.style.cursor = 'pointer'
    }
}



function validPass()
{
    if (pass.value.length < 7)
    {
        btn.style.background = 'tomato'
        btn.disabled = true
        btn.style.cursor = 'not-allowed'
    }
    else
    {
        btn.style.background = 'teal'
        btn.disabled = false
        btn.style.cursor = 'pointer'
    }
}

function phoneValid2()
{
    if (!regPhone.test(phone2.value)) 
    {
        phone2.style.border = '1px solid tomato'
        phone2.style.outline = 'none'
        btn2.style.background = 'tomato'
        btn2.disabled = true
        btn2.style.cursor = 'not-allowed'
    } 
    else
    {
        phone2.style.border = '1px solid teal'
        phone2.style.outline = 'none'
        btn2.style.background = 'teal'
        btn2.disabled = false
        btn2.style.cursor = 'pointer'
    }
}  

function nameValid2()
{
    if (!regName.test(name2.value)) 
    {
        name2.style.border = '1px solid tomato'
        name2.style.outline = 'none'
        btn2.style.background = 'tomato'
        btn2.disabled = true
        btn2.style.cursor = 'not-allowed'
    } 
    else
    {
        name2.style.border = '1px solid teal'
        name2.style.outline = 'none'
        btn2.style.background = 'teal'
        btn2.disabled = false
        btn2.style.cursor = 'pointer'
    }
}