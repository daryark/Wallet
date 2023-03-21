import { useState } from 'react';
import { selectLanguage } from 'redux/global/global-selectors';
import SelectComponent from 'components/FormModalAddTransaction/SelectComponent/SelectComponent';
import { creators, creatorsUkr } from '../ModalTeam/teamMembers';
import { BsGithub } from 'react-icons/bs';
import { useSelector } from 'react-redux';

export function SelectLink() {
  const [linkGh, setLinkGh] = useState('');
  const lan = useSelector(selectLanguage);

  let teamList = [];
  let title = '';

  if (lan === false) {
    teamList = creatorsUkr;
    title = 'Обрати розробницю';
  } else {
    teamList = creators;
    title = 'Select a developer';
  }

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
            placeholder={title}
            options={teamList.map(creator => ({
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
