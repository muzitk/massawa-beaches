import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero'


class SingleRoom extends Component {
  constructor(props) {
    super(props)
    //console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    }
      
  }
  static contextType = RoomContext;
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug)
    if(!room){
      return (
         <div className="error">
        <h3> room isnt available </h3>
        <Link to="/rooms" className="btn-primary"> BAck to Rooms </Link>
       </div>
      )
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room
    
  return (
    <StyledHero img={images[0]}>
    <Banner title={`${name} room`}>
      <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
      </Banner>
      </StyledHero>
  );
  }
}
export default SingleRoom;