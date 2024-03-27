import './index.css'

const TabsList = props => {
  const {tabDetails, onClickTabBtn, isActive} = props
  const addClassNametoActiveTab = isActive ? `tab-btn ${'active'}` : `tab-btn`
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    onClickTabBtn(tabId)
  }
  return (
    <li className="tab-item">
      <button className={addClassNametoActiveTab} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
