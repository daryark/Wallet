import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { selectLanguage } from 'redux/global/global-selectors';
import { changeLanguage } from 'redux/global/globalSlice';

import classNames from 'classnames';
import s from './LangCheckbox.module.css';

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
    <div className={s.checkboxWrap}>
      <label htmlFor="lang">
        <div className={classNames(s.button, s.r)} id={'button-2'}>
          <input
            type="checkbox"
            className={s.checkbox}
            name="lang"
            checked={lang}
            onChange={handleCheckbox}
          />
          <div className={s.knobs}></div>
          <div className={s.layer}></div>
        </div>
      </label>
    </div>
  );
}
