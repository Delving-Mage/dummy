import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {Component1} from './ComponentList';
import Hooks from './Hooks';
import Component1 from './PropDrillingJS';
import {DummyComponent} from './ContextApiJs';
import ParentComponent from './1';
import ParentFunction from './ChildtoParentDataFlow';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import  EmployeeDetails from './PropDrillingReact';
import NavBar from './NavBar';
import ApiInterface from './ApiInterface';
import { Provider } from 'react-redux';
import SignUpForm from './signupForm';
import StoreReducerFile from './store';
import UserDetailsForm from './userDetailsForm';
import Rendering from './rendering';
import Ref from './Ref';
import UseMemo from './useMemo';
import { QueryClient, QueryClientProvider } from 'react-query';
import UseEffectHook from './UseffectForm';
import { ReactQueryDevtools } from 'react-query/devtools';
import ClassComponent from './ClassComponents';
import LoginPageClassComponent from './LoginPageinClassComponent';

const root = ReactDOM.createRoot(document.getElementById('app'));
const queryclient = new QueryClient()
root.render(
<>
<Provider store={StoreReducerFile}>
<BrowserRouter >
<Routes>
{/* <Route path='/dataTranser' element={<ParentFunction />}></Route> */}
{/* <Route path='/parent' element={<ParentComponent />}></Route> */}
<Route index element={<Hooks />}></Route>
<Route path='/login' element={<LoginPage />}></Route>
<Route path='/home' element={<HomePage/>}></Route>
<Route path='/contact' element ={<>Welcome to Contacts Page</>}></Route>
<Route path='/about' element ={<>Welcome to About Page</>}></Route>

<Route path='/table' element={<EmployeeDetails />}></Route>
<Route index element={<NavBar  data={"react"} /> }></Route>
<Route path='/api' element={<QueryClientProvider client={queryclient}>
  <ReactQueryDevtools initialIsOpen={false}/>  <ApiInterface/>
    </QueryClientProvider>}></Route>
<Route path='/redux' element={<SignUpForm/> }></Route>
<Route path='/reducer' element={<UserDetailsForm/>}></Route>
<Route path='/render' element={<Rendering />}></Route>
<Route path='/ref' element={<Ref/>}></Route>
<Route path='/memo' element={<UseMemo/>}></Route>
<Route path='/dummy' element={<UseEffectHook />}></Route>
<Route path='/class' element={<ClassComponent data={"Morning classes"}/>}></Route>
<Route path='/reduxClass' element={<LoginPageClassComponent />}></Route>
</Routes>
</BrowserRouter>
</Provider>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
