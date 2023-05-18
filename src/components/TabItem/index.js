// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = TabDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  const onclickingTab = () => {
    updateTabId(tabId)
  }
  return (
    <li>
      <button
        className={`tab-btn  ${activeTabClassName}`}
        type="button"
        onClick={onclickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
