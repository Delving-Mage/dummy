const Component1=()=>{
    var text = "Hello world"
    var text2= Component2(text)
    console.log(text2,'updated value') 
    return text2
    
}

const Component2=(text)=>{
    console.log(text,'textvalue from parent function')
    text ="Hi Besant"
    return (
        <>
        {text}</>
    );
}

export default Component1;