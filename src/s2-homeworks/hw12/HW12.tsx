import React, {useEffect} from 'react';
import s from './HW12.module.css';
import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeId} from './bll/themeReducer';
import {AppStoreType} from '../hw10/bll/store';

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
];

const HW12 = () => {


    // взять ид темы из редакса
    let dispatch = useDispatch();
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId);

    const change = (id: string) => { // дописать функцию
        let rightId=themes?.find(el=>el.value==id)?.id
        dispatch(changeThemeId(rightId!));
    };

    useEffect(() => {
        let theme=themes?.find(el=>el.id===themeId)?.value
        document.documentElement.dataset.theme = theme!;
    }, [themeId]);

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    onChangeOption={change}
                    options={themes}
                    // сделать переключение тем

                />
            </div>
        </div>
    );
};

export default HW12;
