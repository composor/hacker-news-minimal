import {h} from 'composi'
import Title from './title'
import SortButton from './sort-button'
import ResetButton from './reset-button'

export default function Navigation({lastUpdate, sortByScore,loadItems}) {
  return (
    <div class="navigation">
      <Title/>
      <h4 class='last-update'>Last updated at {lastUpdate ? lastUpdate.toString() : 'never'}</h4>
      <p class='sort-button--paragraph'>
        <div class="top-items">
          <SortButton sortByScore={sortByScore}/> 
          <ResetButton loadItems={loadItems}/>
        </div>
      </p>
    </div>
  )
}