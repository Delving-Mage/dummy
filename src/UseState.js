const stateHook=(initialValue)=>{
    var value= initialValue;
  
    const getValue = ()=>{
        return console.log(value,'INside getfunction')
    }
  
    const setValue = (data)=>{
        value = data
        // console.log(data,'settedValue')
        App()
    }
    return [getValue, setValue]
  }

  export default stateHook;