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
