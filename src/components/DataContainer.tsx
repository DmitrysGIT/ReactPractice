import './SelectableTable.css';
const DataContainer = function({info, selected, active }:{info:string, selected: boolean, active: boolean}) {
    return(
        <div className={"data-container" + (selected ? ' selected' : '') + (active ? ' active' : '')}>
            {info}
        </div>        
    )
}

export default DataContainer;