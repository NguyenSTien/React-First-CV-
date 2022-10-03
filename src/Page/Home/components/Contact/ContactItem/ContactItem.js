import '../Contact.scss';

function ContactItem({ active, name, inputType, onChange }) {
  return (
    <div className={`input_click ${!active ? '' : 'active'}`}>
      <label htmlFor={name} className='label'>
        {name}
      </label>
      {inputType === 'input' ? (
        <input
          id={name}
          type='text'
          className={'input'}
          name={name}
          onChange={onChange}
        />
      ) : (
        <textarea
          type='text'
          className={`input_mess textarea`}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default ContactItem;
