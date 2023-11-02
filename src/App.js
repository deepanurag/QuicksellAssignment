import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div>
      <Navbar />
      <DashView />
    </div>
  ) : <Loading />
}

export default App