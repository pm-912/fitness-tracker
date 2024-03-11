import React from 'react';
import { useHistory } from 'react-router-dom';

const WorkoutCard = ({ workout, onDelete }) => {
  const { id, title, user, type, duration } = workout;
  const history = useHistory();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    history.push(`/edit-workout/${id}`); // redirect to workoutForm to edit entries
  };

  return (
    <div className="workout-card">
      <h3>{title}</h3>
      <p>User: {user}</p>
      <p>Workout Type: {type}</p>
      <p>Duration: {duration} minutes</p>
      <button onClick={handleDelete}>Delete Workout</button>
      <button onClick={handleUpdate}>Update Workout</button>
    </div>
  );
};

export default WorkoutCard;
