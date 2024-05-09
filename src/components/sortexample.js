'use client'
const { Fragment, useState } = React;

export const SortExample=()=>{
// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

const [sortedItems, setSortedItems] = useState([]);

function toggleSelected(itemName) {
	let sortedWorking = sortedItems;
  for (const item of sortedItems) {
    if (item.name === itemName) {
      item.selected = !item.selected;
      break;
    }
  }
  setSortedItems(sortedWorking);
}

useEffect(() => {
	setSortedItems(items);
}, [items])

const List = ({ sortedItems }) => {
	if(!sortedItems.length) sortedItems = items.map((item)=>{
   return {...item, selected:false};
  });
  return (
    <Fragment>
      <ul className="List">
        {sortedItems.sort((a, b) => b.selected - a.selected).map(item => (
          <li key={item.name} onClick={()=>toggleSelected(item.name)} className={`List__item List__item--${item.color}${item.selected ? ' selected':''}`}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  )
};



// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const root = ReactDOM.createRoot(document.getElementById('root'));

return <List items={items}/>
}