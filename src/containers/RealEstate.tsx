import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import '../assets/styles/App.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions';


interface RealEstateProps {
  // Truly guessing at types here!
}

interface RealEstateState {
  robots: any;
  searchField: string;
  counter?: number;
  isLogged?: boolean;


}

class RealEstate extends Component<
  RealEstateProps & { actions: any },
  RealEstateState
>  {
  constructor(props: any) {
    super(props) // calls the constructor of Component
    this.state = {
      robots: [],
      searchField: '',
      counter: ''
    }
    const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({ robots: users })
    })
  }

  onSearchChange = (event: { target: { value: any; }; }) => {
    this.setState({ searchField: event.target.value});
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot: { name: string; }) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    if (robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
      <div className='tc'>
        <h1 className='f2'>Real Estate</h1>
        <body> Counter: {counter}</body>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment(5))}>+5</button>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
      );
    }
  }
}

export default RealEstate;