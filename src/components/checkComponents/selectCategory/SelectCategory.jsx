import './selectCategory.css'

export const SelectCategory = ({categories, setCategory}) => {

    const selectChangeHandler = (e)=>{
        setCategory(e.target.value)
    }
    return (
        <div className='categories-component-container'>
            <select name="categories" id="categories"
                onChange={selectChangeHandler}
            >
                {categories.map((element,i) => {
                    return(<option key={i} value ={element}> {element}</option>)
                })}
            </select>
        </div>
    )
}
