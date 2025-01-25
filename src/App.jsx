import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import TasksList from './components/TaskList'
import TaskDetails from './components/TaskDetails'
import { useGlobalContext } from './context/GlobalContext'

const App = () => {

  const {openDetails} = useGlobalContext();

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <SideBar />
        <TasksList />
        {
          openDetails.status && <TaskDetails />
        }
      </ContentWrapper>
    </>
  )
}

export default App;