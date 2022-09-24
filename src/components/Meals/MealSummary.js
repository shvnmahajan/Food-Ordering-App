import classes from './MealSummary.module.css'

const MealSummary = (props) => {
    return(
        <div className={classes.summary}>
            <h2>Some Header</h2>
            Good text talking about website and food
        </div>
    )
};

export default MealSummary;