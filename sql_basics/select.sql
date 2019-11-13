SELECT 
  person.first_name, 
  person.last_name, 
  COUNT(DISTINCT order.id) as total_orders,
  SUM (order_item.quantity) as total_items_bought,
  SUM(order_item.quantity * item.price - order_item.discount) as total_money_spent
FROM person
LEFT JOIN `order`
on `order`.person_id = person.id
LEFT JOIN order_item
on `order`.id = order_item.order_id
LEFT JOIN item
on order_item.item_id = item.id
group by person.id, person.first_name, person.last_name;