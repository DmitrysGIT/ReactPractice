import './SelectableTable.css';
import { ReactNode, useEffect, useState } from 'react';
import DataContainer from './DataContainer';
const rowsCount = 10;

function SelectableTable({title}: {title: string}) {
    console.log(' SelectableTable RENDER ')
    const [selection, setSelection] = useState<boolean[]>(() => {
        const res = [];
        for (let i = 0; i < rowsCount; i++) {
            res.push(false);
        }
        return res;
    });
    const [activeElement, setActiveElement] = useState(0);

    function buildContainers(state: boolean[]):Array<ReactNode> {
        const arr = [];
        for (let i = 0; i < rowsCount; i++) {
          arr.push(<DataContainer key={'key_'+i} info={'Text_' + i} selected={state[i]} active={activeElement === i}/>);
        }
        return arr;
    }
    
    function handleKeyUp(e: KeyboardEvent) {
        let nextIdx:number;
        let prevIdx:number;
        if (e.key === 'ArrowDown') {            
            setActiveElement((activeIdx) => {
                prevIdx = activeIdx;
                nextIdx = activeIdx < rowsCount - 1 ? activeIdx + 1 : activeIdx;
                return nextIdx;
            });
            if (e.shiftKey) {
                setSelection( (sel) => {
                    const newSel = [...sel];
                    newSel[nextIdx] = true;
                    newSel[prevIdx] = true;
                    return newSel;
                })                
            }
        } else if (e.key === 'ArrowUp') {
            setActiveElement((activeIdx) => {
                prevIdx = activeIdx;
                nextIdx = activeIdx > 0 ? activeIdx - 1 : activeIdx;
                return nextIdx;
            })
            if (e.shiftKey) {
                setSelection( (sel) => {
                    const newSel = [...sel];
                    newSel[nextIdx] = true;
                    newSel[prevIdx] = true;
                    return newSel;
                })                
            }
        } else if (e.key === 'Escape') {
            console.log('POINT#1')
            setSelection((prevValue) => {
                const m = prevValue.map(val => (false));
                console.log(m);
                return m;
            })
        }
    }
    
    useEffect(() => {
        console.log('component mount')
        window.addEventListener('keyup', handleKeyUp);
        return (()=> {
            console.log('COMPONENT UNMOUNT')
        })
    }, [])

    return(
    <>
        <div>{ title }</div>
        <div className="selectable-table">
            { buildContainers(selection) }
        </div>
    </>
  )
}

export default SelectableTable;