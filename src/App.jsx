import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import TasksList from './components/TaskList'
import TaskDetails from './components/TaskDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <SideBar />
        <TasksList />
        <TaskDetails />
      </ContentWrapper>
    </>
  )
}

export default App;