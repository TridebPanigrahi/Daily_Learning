-- Write your PostgreSQL query statement below
SELECT
    firstName,
    lastName,
    city,
    state
from
    person
LEFT JOIN 
    address ON person.personId=address.personId;


-- it will show all the row from person table with having address or null