import React from 'react';

class ShelterPicker extends React.Component {
  render() {
    return (
      <form className action="" className="shelter-selector">
        <h2>Please choose a shelter</h2>
        <input type="text" required placeholder="Shelter Name" />
        <img src="" alt="" />
        <button type="submit">Visit -></button>
      </form>
    )
  }
}

export default ShelterPicker;
