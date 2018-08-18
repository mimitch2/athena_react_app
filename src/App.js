import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : null,    
      filtered: [],
      nav: []
    }
  }

  async componentDidMount () {
    const response = await fetch('https://api.github.com/search/repositories?q=stars:>10000&sort=stars')
    const data = await response.json()

    this.setState({ 
      data: data.items,
      filtered: data.items,
      nav: []
    })
    this.getNavItems()
  }

  handleClick = (e) => {
    const nav = Array.from(document.getElementsByClassName("nav-item")) 
    nav.forEach(item => item.classList.remove("active"))
    document.getElementById(e.target.id).classList.add("active")
    if(e.target.id !== "All"){
      this.setState({filtered: this.state.data.filter(item => item.language === e.target.id)})
    } else {
      this.setState({filtered: this.state.data})
    }
  }

  getNavItems = () => {
    const list = []
    if(this.state.data){
      this.state.data.forEach(item =>{
        if (!list.includes(item.language)){
          list.push(item.language)
        }
      })
    }
    this.setState({nav: list})
  }

  render() {
    if (this.state.data){
      return (
        <div className="App">
          <Header nav={this.state.nav} click={this.handleClick} />
          {this.state.filtered.map(comp => <Card data={comp} key={comp.id}/>)}
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default App;
