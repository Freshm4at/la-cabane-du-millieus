import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import { images } from '../../constants'

const languages = [
    {
        code: 'fr',
        name:'Français',
        conntry_code:'fr'
    },
    {
        code: 'en',
        name:'English',
        conntry_code:'gb'
    }
]
function LangSelector() {

  const currentLanguageCode = cookies.get('i18next') || 'fr'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <img src={images.globe} style={{height:'20px',width:'20px'}}></img>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}

export default LangSelector;