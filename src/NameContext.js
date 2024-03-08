const NameContext=(initialValue)=>{
    let contextValue = initialValue

    const Provider=(props)=>{
        contextValue = props.value
        return props.children;
    }

    const ConsumeText=()=>{
        return contextValue
    }

    
    return  {Provider,ConsumeText}

}
export default NameContext;