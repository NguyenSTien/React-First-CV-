import './style.scss';

function ContactItem({ active, name, inputType, onChange, value }) {
  return (
    <div className={`${'input_click'} ${!active ? '' : 'active'}`}>
      <label className='label'>{name}</label>
      {inputType === 'input' ? (
        <input
          type='text'
          className={'input'}
          name={name}
          onChange={onChange}
          // value={value}
        />
      ) : (
        <textarea
          type='text'
          className={`${'input_mess'} ${'textlarea'}`}
          name={name}
          onChange={onChange}
          // value={value}
        />
      )}
    </div>
  );
}
export default ContactItem;
