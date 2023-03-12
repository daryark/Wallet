import { useState } from 'react';
import SelectComponent from 'components/FormModalAddTransaction/SelectComponent/SelectComponent';
import { creators } from '../ModalTeam/teamMembers';

export function SelectLink() {
  const [linkGh, setLinkGh] = useState('');

  const handleSelectChange = link => {
    setLinkGh(link);
  };
  return (
    <>
      <div className="category-wrapper">
        <label>
          <SelectComponent
            name="developers"
            placeholder="Select developer"
            options={creators.map(creator => ({
              value: creator.gh,
              label: creator.name,
            }))}
            onChange={option => {
              handleSelectChange(option.value);
            }}
          />
        </label>
      </div>
      <a
        href={linkGh}
        style={{
          display: 'inline-block',
          marginTop: '15px',
          fontSize: '18px',
          textDecorationLine: 'underline',
        }}
      >
        {linkGh ? linkGh : ''}
      </a>
    </>
  );
}
