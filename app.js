import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

let Button = styled.button`
  background-color: #466AB3;
  padding: 10px;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bold;
  min-width: 100px;
`

let Context = React.createContext()


class Header extends React.Component {

  constructor(){
    super()
    this.state = {
      jobs: [{},{},{}]
    }
  }

  render() {
    return (
      <div>
        <Button onClick={() => {
          let jobs = this.state.jobs
          jobs.push({})
          this.setState({
            jobs: jobs
          })
        }}>Post A Job</Button>
      </div>
    )
  }
}

class JobsList extends React.Component {
  constructor() {
    super()
    this.state = {
      jobs: [{}, {}, {}]
    }
  }
  render() {
    return (
      <Context.Consumer>
        {(state)=>{
          return <div>this data {state.state.title} is coming from provier</div>
        }}
      </Context.Consumer>
    )
  }
}


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      title: 'hello world'
    }
  }

  render() {
    return (
      <Context.Provider value={{state: this.state}}>
        <Header />
        <JobsList />
      </Context.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))