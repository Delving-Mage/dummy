import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import StoreReducerFile from './store';
import reportWebVitals from './reportWebVitals';
import Hooks from './Hooks';
import Component1 from './PropDrillingJS';
import DummyComponent from './ContextApiJs';
import ParentComponent from './1';
import ParentFunction from './ChildtoParentDataFlow';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import EmployeeDetails from './PropDrillingReact';
import NavBar from './NavBar';
import ApiInterface from './ApiInterface';
import SignUpForm from './signupForm';
import UserDetailsForm from './userDetailsForm';
import Rendering from './rendering';
import Ref from './Ref';
import UseMemo from './useMemo';
import UseEffectHook from './UseffectForm';
import ClassComponent from './ClassComponents';
import  LoginPageClassComponent  from './LoginPageinClassComponent'; // Moved this import down

const root = ReactDOM.createRoot(document.getElementById('app'));
const queryclient = new QueryClient();

root.render(
  <>
    <Provider store={StoreReducerFile}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hooks />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<>{'Welcome to Contacts Page'}</>} />
          <Route path="/about" element={<>{'Welcome to About Page'}</>} />
          <Route path="/table" element={<EmployeeDetails />} />
          <Route index element={<NavBar data={'react'} />} />
          <Route
            path="/api"
            element={
              <QueryClientProvider client={queryclient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <ApiInterface />
              </QueryClientProvider>
            }
          />
          <Route path="/redux" element={<SignUpForm />} />
          <Route path="/reducer" element={<UserDetailsForm />} />
          <Route path="/render" element={<Rendering />} />
          <Route path="/ref" element={<Ref />} />
          <Route path="/memo" element={<UseMemo />} />
          <Route path="/dummy" element={<UseEffectHook />} />
          <Route path="/class" element={<ClassComponent data={'Morning classes'} />} />
          <Route path="/reduxClass" element={<LoginPageClassComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);

reportWebVitals();
