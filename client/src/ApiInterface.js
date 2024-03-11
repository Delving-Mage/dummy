import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useMutation, useQuery } from "react-query";
import { useSelector } from "react-redux";
import { url } from "./constants/userDetailsContexts";
import ToDoService from "./Services/toDoData.service";
import { isError } from "../node_modules/react-query/es/core/utils";

const ApiInterface = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const SynchronousCalls = () => {
    console.log("Action1");
    console.log("Action2");
  };

  console.log(
    useSelector((e) => e),
    "reduxdata inapi interface"
  );

  const DeleteDummyData = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((e) => {
        const updatedDummyData = employeeData.filter((e) => e.id !== id);
        console.log(updatedDummyData, "updateeddata");
        setEmployeeData(updatedDummyData);
      });
  };

  const updatedDummyData = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: "Besant Classes",
      })
      .then((e) => {
        const updatedDummyData = employeeData.map((e) =>
          e.id === id ? { ...e, title: "Besant Classes" } : e
        );
        setEmployeeData(updatedDummyData);
      });
  };

  // const fetchCall =()=> ToDoService.FetchDummyData().then((e) => {
  //   console.log(e, "then");
  //   setEmployeeData(e?.data);
  // })
  // .catch((e) => {
  //   alert(e);
  // });
  // const postDummyData =()=>{

  //   axios.post(`https://jsonplaceholder.typicode.com/todos`,{
  //       id:"202",
  //       title:"Besant",
  //       userId:"45453245"
  //   }).then((e)=>{
  //       setEmployeeData([...employeeData,e.data])
  //   })
  // }

  const mutationSaveData = useMutation((payload) =>
    ToDoService.postDummtData(payload)
  );

  const mutationFetchToDoData = useMutation(() => ToDoService.FetchDummyData());

  // const postDummyData = () => {
  //   mutationSaveData.mutate(
  //     {
  //       id: "123",
  //       title: "morning classes",
  //       userId: "13456",
  //     },
  //     {
  //       onSuccess: (e) => {
  //         console.log(e, "onsuccess eventdata");
  //         setEmployeeData([...employeeData, e.data]);
  //       },
  //       onError: (e) => {
  //         alert(e);
  //       },
  //       onSettled: () => {
  //         console.log("In on settled");
  //       },
  //     }
  //   );
  // };

  const fetchCall = () => {
    mutationFetchToDoData.mutate(
      {},
      {
        onSuccess: (e) => {
          setEmployeeData(e?.data);
        },

        onError: () => {
          console.log("entered in onError");
          alert("facing some technical issue");
        },

        onSettled: (e) => {
          console.log("API Call happened");
        },
      }
    );
  };

  useEffect(() => {
    fetchCall();
  }, []);

  // const { data, isLoading, isError } = useQuery(
  //   "todos",
  //   () => ToDoService.FetchDummyData(),
  //   {
  //     // enabled:flag==true
  //     cacheTime: 60000,
  //     staleTime: 60000,
  //     refetchonMount: "",
  //     retry: 5,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  // useEffect(() => {
  //   if (data) {
  //     setEmployeeData(data?.data);
  //   }
  // }, [data]);
const [flag,setFlag] =useState(false)
  const { data, isLoading, isError } = useQuery("todosPost", () =>
    ToDoService.postDummtData({
      id: "123",
      title: "morning classes",
      userId: "13456",
    }),{
      enabled:flag,
      retry:3
    }
  );

  useEffect(()=>{
    if(data){
      setEmployeeData([...employeeData, data?.data]);
    }
  },[data])

  const dataa = employeeData.map((e) =>{

  } )

  return (
    <>
      {isLoading && <p>Data is Loading......</p>}
      {isError && <p>Failed to fetch Data from API</p>}
      <button className={"classss"} onClick={()=>setFlag(true)}>Post Data</button>
      <table>
        <thead>
          <tr>
            <th>id</th> 
            <th>title</th>
            <th>userId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((e) => {
         return   <tr>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.userId}</td>
              <button onClick={() => DeleteDummyData(e.id)}>
                <MdDelete />
              </button>
              <button onClick={() => updatedDummyData(e.id)}>
                <MdOutlineEdit />
              </button>
            </tr>
})}
        </tbody>
      </table>
    </>
  );
};

export default ApiInterface;
