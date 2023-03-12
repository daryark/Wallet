import { useState } from 'react';
import SelectComponent from 'components/FormModalAddTransaction/SelectComponent/SelectComponent';
import { creators } from '../ModalTeam/teamMembers';
import { BsGithub } from 'react-icons/bs';

export function SelectLink() {
  const [linkGh, setLinkGh] = useState('');

  const handleSelectChange = link => {
    setLinkGh(link);
  };
  return (
    <>
      <div
        className="category-wrapper"
        style={{
          marginTop: '10px',
        }}
      >
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
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkGh ? linkGh : <BsGithub />}
      </a>
    </>
  );
}
