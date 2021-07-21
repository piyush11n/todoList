import {Button} from 'react-bootstrap';

export default function MeButton({name,onClickHandler,disabled}) {
    return (
        <Button disabled={disabled} onClick={onClickHandler}>{name}</Button>
    )
}
