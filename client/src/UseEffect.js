const useEffect=((func1,func2)=>{

    func1()

    //clearing the state
    func2()
},[])

const func1=()=>{
    var text ="hi"
    console.log(text)
}

const func2=()=>{
    var text="hello"
    console.log(text)    
}