import {h} from 'composi'

export default function ({ sortByScore }) {
  return <button class="button" onclick={sortByScore}>Sort!</button>
}