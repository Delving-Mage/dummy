import { useEffect, useState } from "react";
 
const UseEffectHook = () => {
    const [name, setName] = useState('Sample Use Effect Value');
 
    useEffect(() => {
        console.log(name);
    }, [name]);
 
    return (
        <>
            <button onClick={() => setName('Sample Use Effect After Update')}>Update Name</button>
        </>
    );
}
 
export default UseEffectHook;