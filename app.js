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


let Navigation = styled.header`
  background-color: #fff;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;
`


class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: [{}, {}, {}]
    }
  }

  render() {
    return (
      <Context.Consumer>
        {
          (ctx) => {
            return (
              <Navigation>
                <img width="120px;" src={require('./assets/logo.png')} />
                <Button onClick={() => {
                  console.log(ctx.actions.addJob())
                }}>Post A Job</Button>
              </Navigation>
            )
          }
        }
      </Context.Consumer>
    )
  }
}


let Container = styled.main`
  background-color: red;
  min-height: 500px;
  padding: 10px 10%;
  
`
let Job = styled.div`
  height: 80px;
  border: 1px solid;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 2rem;
  margin-top: 20px;
`

class JobsList extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Context.Consumer>
        {(ctx) => {
          return <Container>
            {
              ctx.state.jobs.map((item, i) => {
                return <Job key={i}>Job #{i}</Job>
              })
            }
          </Container>
        }}
      </Context.Consumer>
    )
  }
}


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      jobs: [{}]
    }
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state, 
        actions: {
          addJob:  ()=>{
            let jobs = this.state.jobs
            jobs.push({})
            this.setState({ jobs: jobs })
          }
        }
      }}>
        <Header />
        <JobsList />
      </Context.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))