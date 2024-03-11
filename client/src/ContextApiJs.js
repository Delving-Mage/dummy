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

const DummyComponent=()=>{
    return(
        <NameContext.Provider value={"Hello world"} >
        DummyComponent
        <br/>
        <DummyComponent1 />
        <DummyComponent2/>
        </NameContext.Provider>
    )
}
const DummyComponent1=()=>{
    return(
        <>
        DummyComponent1
        <br/>
       
        </>
    )
}
const DummyComponent2=()=>{
    const textInherited = NameContext.ConsumeText()
    return(
        <>
        <br/>
        DummyComponent2
        <br/>
        <p>{textInherited}</p>
        </>
    )
}

export default DummyComponent;
