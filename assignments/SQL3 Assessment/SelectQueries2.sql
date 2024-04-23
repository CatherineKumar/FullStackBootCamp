/* use food_order_app database */
use food_order_app;

/* 1. Retrieve number of fooditems for each cuisine */
Select c.name, subquery.countFoodItems
from (
select cuisineId, count(*) as countFoodItems
from fooditem
group by cuisineId
) as subquery
join cuisine c
  on subquery.cuisineId = c.Id
/* 2. Retrieve category names in the order of highest to lowest no. of fooditems */

/* 3. Retrieve cuisine name as CuisineName, fooditem name as name FoodItemName 
and description as Description of all the fooditems belonging to 'Italian' cuisine */

/* 4. Retrieve details of food items, including their name, vegetarian status,
 and cuisine name, for only those food items that are vegetarian. */

/* 5. Retrieve the details of users who have items in their cart 
along with the total order amount */
