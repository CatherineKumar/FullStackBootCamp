/*use food_order_app database */
use food_order_app;

/* 1. Display all distinct cuisine names. */

Select distinct name from cuisine

/* 2. Display description of 'Cake' category. */

Select description
from category
where name  = 'Cake'

/* 3. Select all restaurants where restaurant names ends with 'Junction'. */

Select *
from restaurant
where name like '%Junction'

/* 4. Display details of all vegeterian fooditems. */
Select *
from fooditem
where isVeg = 1

/* 5. Retrieve all menu items with food items that have a price equal to or less than $10. */
Select *
from menu_items
where fooditemPrice <= 1

/* 6.Retrieve cartId having the maximum number of food items. */
SELECT cartID
FROM (
  SELECT cartID, COUNT(DISTINCT fooditemId) as distinctCount
  FROM cart_items
  GROUP BY cartID
) as subquery
ORDER BY distinctCount DESC LIMIT 0, 1
/* 7. Retrieve all the shipping details where emailId contains 'doe'. */

/* 8. Retrieve the order with the highest price. */
 
/* 9. Retrieve the most recently updated order. */

/* 10. How many total units of food items were purchased in orderId 1? */
