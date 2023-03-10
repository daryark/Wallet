import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { selectLanguage } from 'redux/global/global-selectors';
import { changeLanguage } from 'redux/global/globalSlice';

export default function LangCheckbox() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const lang = useSelector(selectLanguage);
  const handleCheckbox = e => {
    return e.target.checked === true
      ? (dispatch(changeLanguage(true)), i18n.changeLanguage('en'))
      : (dispatch(changeLanguage(false)), i18n.changeLanguage('ua'));
  };
  return (
    <div>
      <label htmlFor="lang">
        <div id={'button-2'}>
          <input
            type="checkbox"
            name="lang"
            checked={lang}
            onChange={handleCheckbox}
          />
        </div>
      </label>
    </div>
  );
}
