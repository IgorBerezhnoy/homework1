import React from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// добавить в проект иконки и импортировать
const downIcon = <KeyboardArrowDownIcon fontSize={"small"} />
const upIcon = <KeyboardArrowUpIcon fontSize={"small"}/>
const noneIcon =<UnfoldMoreIcon fontSize={"small"}/>

// const downIcon = '[\\/]';
// const upIcon = '[/\\]';
// const noneIcon = '[--]';

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

    return sort === '' ? down : sort === down ? up : sort === up? "": down
    // return sort === '' ? down : sort === down ? up : '';
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
};

const SuperSort: React.FC<SuperSortPropsType> =
    ({sort, value, onChange, id = 'hw15',}) => {
        const up = '0' + value;
        const down = '1' + value;

        const onChangeCallback = () => {
            onChange(pureChange(sort, down, up));
        };

        const icon = sort === down
            ? downIcon
            : sort === up
                ? upIcon
                : noneIcon;

        return (
            <span
                id={id + '-sort-' + value}
                onClick={onChangeCallback}
            >
            {/*сделать иконку*/}
                {/*<img*/}
                {/*    id={id + '-icon-' + sort}*/}
                {/*    src={icon}*/}
                {/*/>*/}

                {icon} {/*а это убрать*/}
        </span>
        );
    };

export default SuperSort;
