import './selectCategory.css'

export const SelectCategory = () => {
  const categories = [
    'Birthday Parties',
    'Category 2',
    'Category 3'
]
return (
    <div className='categories-component-container'>
        <select name="categories" id="categories">
            {categories.map((element,i) => {
                return(<option key={i} value ={element}> {element}</option>)
            })}
        </select>
    </div>
)
}
