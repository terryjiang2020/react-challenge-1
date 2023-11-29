import { useEffect, useRef, useState } from 'react'
import { Option } from '../shared/types';
import { useOutsideClick } from '../shared/hooks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type SelectComponentProps = {
    options: Option[],
    className?: string,
    inputContainerClassName?: string,
    selectClassName?: string,
    optionContainerClassName?: string,
    optionClassName?: string,
    onChange?: (value: string) => void,
    title?: string
}

const SelectComponent = (props: SelectComponentProps) => {
    const [selectedOption, setSelectedOption] = useState<Option>({
        value: '',
        label: '',
        default: false
    });
    const [hoveredOption, setHoveredOption] = useState<Option>({
        value: '',
        label: '',
        default: false
    });
    const [selectionOpened, setSelectionOpened] = useState(false);
    const [displayOptionsAbove, setDisplayOptionsAbove] = useState(false);
    const eleRef = useRef<HTMLDivElement>(null);
    const uid = 'optionsList-' + new Date().getTime().toString() + (Math.random() * 1000).toFixed(0);

    useEffect(() => {
        if (props.options.length > 0 && !selectedOption.value) {
            const defaultOption = props.options.find(option => option.default);
            if (defaultOption) {
                setSelectedOption(defaultOption);
            }
        }
    }, [props.options, selectedOption])

    useEffect(() => {
        if (props.onChange && selectedOption) {
            props.onChange(selectedOption.value);
        }
        if (selectedOption.value) {
            setHoveredOption(selectedOption);
        }
    }, [selectedOption, props])

    const handleSelection = (option: Option, event?: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        console.log('headleSelection is triggered, option: ', option, ', event: ', event);
        if (event) {
            event.stopPropagation();
        }
        setSelectedOption(option);
        setSelectionOpened(false);
    }

    useEffect(() => {
        console.log('selectionOpened: ', selectionOpened);
    }, [selectionOpened])

    useEffect(() => {
        if (eleRef.current) {
            console.log(eleRef.current.getBoundingClientRect())
            console.log('window.innerHeight: ', window.innerHeight);
            console.log('displayOptionsAbove: ', displayOptionsAbove);
        }
        if (
            eleRef.current &&
            eleRef.current.getBoundingClientRect().top +
            eleRef.current.getBoundingClientRect().height + 300 >= window.innerHeight
        ) {
            setDisplayOptionsAbove(true);
        }
        else {
            setDisplayOptionsAbove(false);
        }
    }, [eleRef, selectionOpened, displayOptionsAbove])

    useEffect(() => {
        if (selectionOpened) {
            let focusedOption;
            if (selectedOption.value) {
                focusedOption = document.getElementById(uid + '-' + selectedOption.value);
            }
            else if (hoveredOption.value) {
                focusedOption = document.getElementById(uid + '-' + hoveredOption.value);
            }
            else {
                focusedOption = document.getElementById(uid + '-' + props.options[0].value);
            }
            focusedOption?.focus();
            focusedOption?.scrollIntoView(true);
        }
        // use selectionOpened as the dependency since we only want this to be triggered if selectionOpened is changed.
    }, [selectionOpened]);

    useEffect(() => {
        console.log('displayOptionsAbove: ', displayOptionsAbove);
    }, [displayOptionsAbove])

    useOutsideClick(eleRef, () => {
        setSelectionOpened(false);
    })

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log('handleKeyDown is triggered, event: ', event);
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                if (!selectionOpened) {
                    setSelectionOpened(true);
                }
                break;
            case 'Escape':
                setSelectionOpened(false);
                break;
            default:
                break;
        }
    };

    const handleKeyDownItem = (option: Option, event: React.KeyboardEvent<HTMLLIElement>) => {
        console.log('handleKeyDownItem is triggered, event: ', event);
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                navigateOptions(-1, option);
                break;
            case 'ArrowDown':
                event.preventDefault();
                navigateOptions(1, option);
                break;
            case 'Enter':
                event.preventDefault();
                if (selectionOpened) {
                    handleSelection(option);
                }
            break;
            case 'Escape':
                setSelectionOpened(false);
                break;
            default:
                break;
      }
    };
  
    const navigateOptions = (direction: number, currentOption: Option) => {
        console.log('navigateOptions is triggered, direction: ', direction, ', currentOption: ', currentOption);
        const currentIndex = props.options.findIndex((option) => option.value === currentOption.value);
        const newIndex = (currentIndex + direction + props.options.length) % props.options.length;
        setHoveredOption(props.options[newIndex]);
        document.getElementById(uid + '-' + props.options[newIndex].value)?.focus();
        console.log('currentIndex: ', currentIndex);
        console.log('newIndex: ', newIndex);
    };

    const defaultContainerClassName = ' select-container'

    const defaultOptionClassName = ' h-11 w-full cursor-pointer select-none relative py-2 pl-3 pr-9 hover:font-medium leading-8 line-clamp-1'

    const render = (
        <div className={(props.className ? props.className : '') + ' text-base' + (selectionOpened ? ' expanded' : '')}>
            <div className="select-title">
                { props.title ? props.title : 'Occupation'}
            </div>
            <div
            ref={eleRef}
            onClick={() => setSelectionOpened(prev => !prev)}
            onKeyDown={handleKeyDown}
            tabIndex={selectionOpened ? -1 : 0}
            className={(props.inputContainerClassName ? props.inputContainerClassName : '') + defaultContainerClassName}
            aria-haspopup="listbox"
            aria-expanded={selectionOpened}
            aria-labelledby="selectLabel"
            aria-owns={uid}
            aria-label={"Select " + (props.title ? props.title : 'Occupation')}
            aria-controls={uid}
            role="combobox">
                <div className={
                    'line-clamp-1 pr-6' +
                    (
                        selectedOption.value
                        ?
                        ' text-black'
                        :
                        ' text-[#666666]'
                    ) + (
                        props.selectClassName
                        ?
                        ' ' + props.selectClassName
                        :
                        ''
                    )
                }>
                    {
                        selectedOption.label
                        ?
                        selectedOption.label
                        :
                        'Select Occupation'
                    }
                    <div className={
                        "absolute right-2 top-1/2 transform -translate-y-1/2 icon-container"
                    } role='presentation'>
                        <KeyboardArrowDownIcon className="select-icon" />
                    </div>
                </div>
                
                <div
                className={
                    'option-container' +
                    (displayOptionsAbove ? ' display-above' : '') +
                    (props.optionContainerClassName ? ' ' + props.optionContainerClassName : '')
                }
                id={uid}>
                    <ul className={'options-list'}
                    role='listbox'
                    aria-label='Select Occupation'
                    tabIndex={-1}>
                        {
                            props.options.map(option => (
                                <li onClick={(ev) => handleSelection(option, ev)}
                                className={
                                    (
                                        selectedOption.value === option.value ?
                                        ' bg-[#6E2B96] text-white' :
                                        hoveredOption.value === option.value ?
                                        ' font-medium' :
                                        ''
                                    ) +
                                    defaultOptionClassName + 
                                    (props.optionClassName ? ' ' + props.optionClassName : '')
                                }
                                aria-label={option.label}
                                key={option.value}
                                aria-selected={selectedOption.value === option.value}
                                role='option'
                                id={uid + '-' + option.value}
                                tabIndex={0}
                                onKeyDown={(ev) => handleKeyDownItem(option, ev)}>
                                    {option.label}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )

    return render;
}

export default SelectComponent;