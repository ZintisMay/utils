function parsePhoneNumber(n){
    let scrubbedN = n.replace(/[^0-9]/g,"")
    let result = ""
    let length = scrubbedN.length
    if(length > 0){
        result += `(${scrubbedN.slice(0,3)}`
    }
    if(length > 2){
        result += `)-${scrubbedN.slice(3,6)}`
    }
    if(length > 6){
        result += `-${scrubbedN.slice(6,10)}`
    }
    return result
}

function test(s){
    console.log(parsePhoneNumber(s))
}

let data = [
    '1234567890',
    '123456789',
    '12345678',
    '1234567',
    '123456',
    '12345',
    '1234',
    '123',
    '12',
    '1',
    '123a4567890',
    '1234aa56789',
    '1234a5678',
    '123asd4567',
    '1234asd56',
    '1234_+5',
    '123=4',
    '12-3',
    '12()',
    '!@#$%^&*(1'

]

data.forEach(test)
