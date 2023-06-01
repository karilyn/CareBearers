import './Dropdown.scss';

const Dropdown = (props) => {
  

  const handleChange = (event) => {
    props.onChange(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <label>
        How many children do you have?
        <select className='dropdown' value={props.kids} onChange={handleChange}>
        <option value={0}>0</option>

          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4+</option>
        </select>
      </label>
      <p>You have {props.kids} children</p>
    </div>
  )
}

export default Dropdown;