import './style.scss';

function ContactItem({ active, name, inputType, onChange }) {
  return (
    <div className={`${'input_click'} ${!active ? '' : 'active'}`}>
      <label className='label'>{name}</label>
      {inputType === 'input' ? (
        <input
          type='text'
          className={'input'}
          name={name}
          onChange={onChange}
        />
      ) : (
        <textarea
          type='text'
          className={`${'input_mess'} ${'textlarea'}`}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
}
export default ContactItem;
