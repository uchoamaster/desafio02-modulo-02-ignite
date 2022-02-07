import { Component } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function Food({ food }){
const { available } = food;
const [ isAvailable, setIsAvailable ] = useState(available)

const toggleAvailable = async () => {
  await api.put(`/foods/${food.id}`, {
    ...food,
    available: !isAvailable,
  });

  setIsAvailable({ !isAvailable });
}

  return (

  )
}


class Food extends Component {




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
