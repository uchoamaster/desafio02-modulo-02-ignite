import { Component } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function Food({ food }){
const { available } = food;
const [ isAvailable, setIsAvailable ] = useState(available)

  return (

  )
}


class Food extends Component {


  toggleAvailable = async () => {
    const { food } = this.props;
    const { isAvailable } = this.state;

    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    this.setState({ isAvailable: !isAvailable });
  }

  setEditingFood = () => {
    const { food, handleEditFood } = this.props;

    handleEditFood(food);
  }

  render() {
    const { isAvailable } = this.state;
    const { food, handleDelete } = this.props;

    
  }
};

export default Food;
