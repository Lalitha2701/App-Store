import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, isActive} = props
  const {displayText, tabId} = tabsList

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabs-container">
      <button
        type="button"
        className={`button ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
