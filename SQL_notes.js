/**
 * ! SQL Essential Training
 * 
 * ? CRUD = Create -> Read -> Update -> Delete
 * 
 * Following notes are from SQLite3
 * 
 * & SELECT Statement
 * * SELECT (columns we want with comma separated or * for all) FROM (table name);
 * * SELECT (columns we want with comma separated or * for all) FROM (table name) ORDER BY (column);
 * ^ AS command changes column name like LifeExpectance -> 'Life Expectancy'
 * * SELECT Name,(LifeExpectancy) AS ('Life Expectancy') FROM Country ORDER BY Name;
 * 
 * & Selecting Rows
 * * SELECT Name,Continent,Region FROM Country WHERE Continent = 'Europe';
 * * SELECT Name,Continent,Region FROM Country WHERE Continent = 'Europe ORDER BY Name';
 * * SELECT Name,Continent,Region FROM Country WHERE Continent = 'Europe ORDER BY Name' LIMIT 5;
 * * SELECT Name,Continent,Region FROM Country WHERE Continent = 'Europe ORDER BY Name' LIMIT 5 OFFSET 5;
 * 
 * & Counting Rows
 * * SELECT COUNT(*) FROM Country;
 * * SELECT COUNT(*) FROM Country WHERE Population > 1000000;
 * * SELECT COUNT(*) FROM Country WHERE Population > 1000000 AND Continent = 'Europe';
 * 
 * & Inserting Data
 * * INSERT INTO customer (name,address,city,state,zip)
 * *    VALUES ('Fred Flintstone','123 Cobblestone Way','Bedrock','CA','91234');
 * 
 * & Updating Data
 * * UPDATE customer SET address = '123 Music Avenue',zip = '98056' WHERE id = 5;
 * 
 * & Deleting Data
 * * DELETE FROM (table) WHERE id = row_number; 
 * * DELETE FROM customer WHERE id = 4;
 * 
 * & Creating Table
 * * CREATE TABLE test (
 * *    a INTEGER,
 * *    b TEXT);
 * ^ If table exist error occurs
 * * INSERT INTO test VALUES(1,'a');
 * * INSERT INTO test VALUES(2,'b');
 * * INSERT INTO test VALUES(3,'c');
 * * SELECT * FROM test
 * 
 * & Deleting Table
 * * DROP TABLE test
 * * DROP TABLE IF EXISTS test
 * 
 * & Adding row or rows to the table
 * * CREATE TABLE test (a INTEGER, b TEXT,c TEXT);
 * * INSERT INTO test VALUES (1,'This','Right here');
 * * INSERT INTO test (b,c) VALUES ('That','Over There');
 * * INSERT INTO test DEFAULT VALUES;
 * * INSERT INTO test (a,b,c) SELECT id,name,description FROM item;
 * 
 * & Deleting rows
 * * DELETE FROM test WHERE a = 3
 * * DELETE FROM <table> WHERE <column_name> = <column_value>
 *
 * & Constraining Columns
 * * CREATE TABLE test (a TEXT UNIQUE, b TEXT, c TEXT DEFAULT 'panda');
 * *INSERT INTO test (a,b) VALUES ('one','two');
 * 
 * & Changing a schema
 * * ALTER TABLE test ADD d TEXT;
 * 
 * & ID Columns
 * * CREATE TABLE test (id INTEGER PRIMARY KEY, a INTEGER, b TEXT);
 * * INSERT INTO test (a,b) VALUES (10,'a');
 * * INSERT INTO test (a,b) VALUES (11,'a');
 * * INSERT INTO test (a,b) VALUES (12,'c');
 * * SELECT * FROM test
 * ^ -> Result
 * ^ ->|id | a | b |
 * ^ ->|1  |10 | a |
 * ^ ->|2  |11 | b |
 * ^ ->|3  |12 | c |
 * 
 * & Filtering Data
 * *SELECT Name, Continent,Population FROM Country WHERE Population < 100000 ORDER BY Population DESC;
 * * SELECT Name, Continent,Population FROM Country WHERE Name LIKE '%island%';
 * * SELECT Name, Continent,Population FROM Country WHERE Name LIKE '_a%';
 * 
 * & Removing duplicates
 * * SELECT DISTINCT Continent FROM Country;
 * 
 * & Conditional Expressions
 * * DROP TABLE IF EXISTS booltest;
 * * CREATE TABLE booltest (a INTEGER, b INTEGER);
 * * INSERT INTO booltest VALUES (1,0);
 * * SELECT * FROM booltest;
 * 
 * * SELECT
 * *     CASE WHEN a THEN 'true' ELSE 'false' END as boolA,
 * *     CASE WHEN b THEN 'true' ELSE 'false' END as boolB
 * *     FROM booltest;
 * * SELECT
 * *     CASE a WHEN 1 THEN 'true' ELSE 'false' END as boolA,
 * *     CASE b WHEN 1 THEN 'true' ELSE 'false' END as boolB
 * *     FROM booltest;
 * 
 * & Accessing related tables
 * * SELECT l.description AS left,r.description AS right
 * *     FROM left AS l
 * *     JOIN right AS r ON l.id = r.id;
 * 
 * & RElating multiple tables
 * * SELECT c.name AS Cust, c.zip,i.name AS Item, i.description, s.quantity AS Quan, s.price AS Price
 * *    FROM sale AS s
 * *    JOIN item AS i ON s.item_id = i.id
 * *    JOIN customer AS c ON s.customer_id = c.id
 * *    ORDER BY Cust,Item;
 * 
 * & Finding the length of a string
 * * SELECT Name, LENGTH(Name) AS Len FROM City ORDER BY Len DESC;
 * 
 * & Selecting part of a string
 * * SELECT SUBSTR('this string',6);
 * ^ It return -> string
 * * SELECT SUBSTR('this string',6,3);
 * ^ It return -> str
 * 
 * & Removing spaces
 * * SELECT TRIM('   string    ');
 * ^ -> string
 * * SELECT LTRIM('    string    ')
 * ^ -> 'string    ' 
 * * SELECT RTRIM('    string    ')
 * ^ -> '    string' 
 * 
 * & TYPEOF function
 * * SELECT TYPEOF(1+1);
 * ^ -> integer
 * * SELECT TYPEOF(1+1.0);
 * ^ -> real 
 * * SELECT TYPEOF('pandas');
 * ^ -> text
 * * SELECT TYPEOF('pandas'+'koala');
 * ^ -> integer
 * 
 * & Integer division
 * * SELECT 1 / 2
 * ^ -> 0
 * * SELECT 1.0 / 2
 * ^ -> 0.5
 * * SELECT CAST (1 AS REAL) / 2
 * ^ -> 0.5
 * * SELECT 17 / 5
 * ^ -> 3
 * * SELECT 17 % 5
 * ^ -> 2 
 * 
 * & Rounding Numbers
 * * SELECT 2.55555;
 * ^ -> 2.55555
 * * SELECT ROUND(2.55555);
 * ^ -> 3
 * * SELECT ROUND(2.55555,3);
 * ^ -> 2.556
 * * SELECT ROUND(2.55555,0);
 * ^ -> 3
 * 
 * & Date and Time functions
 * * SELECT DATETIME('now');
 * * SELECT DATE('now');
 * * SELECT TIME('now');
 * * SELECT DATETIME('now','+1 day');
 * * SELECT DATETIME('now','+3 days');
 * * SELECT DATETIME('now','-1 month');
 * * SELECT DATETIME('now','+3 hours','+27 minutes','-1 day','+3 years');
 * 
 * & Using aggregate functions
 * * SELECT COUNT(Population) FROM Country;
 * * SELECT AVG(Population) FROM Country;
 * * SELECT Region, MIN(Population),MAX(Population) FROM Country GROUP BY Region;
 * * SELECT Region,SUM(Population) FROM Country GROUP BY Region;
 * 
 * & Transactions
 * * CREATE TABLE widgetInventory (
 * *     id INTEGER PRIMARY KEY,
 * *     description TEXT,
 * *     onhand INTEGER NOT NULL
 * * );
 *
 * * CREATE TABLE widgetSales (
 * *    id INTEGER PRIMARY KEY,
 * *    inv_id INTEGER,
 * *    quan INTEGER,
 * *    price INTEGER
 * * );
 * 
 * * INSERT INTO widgetInventory (description,onhand) VALUES ('rock',25);
 * * INSERT INTO widgetInventory (description,onhand) VALUES ('paper',25);
 * * INSERT INTO widgetInventory (description,onhand) VALUES ('scissors',25);
 * 
 * * SELECT * FROM widgetInventory;
 * * SELECT * FROM widgetSales;
 * 
 * * BEGIN TRANSACTION;
 * * INSERT INTO widgetSales (inv_id,quan,price) VALUES (1,5,500);
 * * UPDATE widgetInventory SET onhand = (onhand - 5) WHERE id = 1;
 * * END TRANSACTION;
 * 
 * * BEGIN TRANSACTION;
 * * INSERT INTO widgetInventory (description,onhand) VALUES ('toy',25);
 * * ROLLBACK;
 * * SELECT * FROM widgetInventory;
 * 
 * & Automating data with trigger
 * * CREATE TABLE widgetCustomer (id INTEGER PRIMARY KEY,name TEXT, last_order_id INT);
 * * CREATE TABLE widgetSale (id INTEGER PRIMARY KEY,item_id INT, customer_id INT,quan INT,price INT);
 * 
 * * INSERT INTO widgetCustomer (name) VALUES ('Bob');
 * * INSERT INTO widgetCustomer (name) VALUES ('Sally');
 * * INSERT INTO widgetCustomer (name) VALUES ('Fred');
 * 
 * * SELECT * FROM widgetCustomer;
 * 
 * * CREATE TRIGGER newWidgetSale AFTER INSERT ON widgetSale
 * *     BEGIN 
 * *         UPDATE widgetCustomer SET last_order_id = NEW.id WHERE widgetCustomer.id = NEW.customer_id;
 * *     END
 * * ;
 * 
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price) VALUES (1,3,5,1995);
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price) VALUES (2,2,3,1495);
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price) VALUES (3,1,1,2995);
 * 
 * * SELECT * FROM widgetSale;
 * * SELECT * FROM widgetCustomer; 
 * 
 * & Preventing updates
 * * DROP TABLE IF EXISTS widgetSale;
 * 
 * * CREATE TABLE widgetSale (id integer primary key,item_id INT,customer_id INTEGER,quan INT,price INT, * * reconciled INT);
 * 
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price,reconciled) VALUES (1,2,3,1995,0);
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price,reconciled) VALUES (2,2,3,1495,1);
 * * INSERT INTO widgetSale (item_id,customer_id,quan,price,reconciled) VALUES (3,1,1,2995,0);
 * 
 * * SELECT * FROM widgetSale;
 * 
 * * CREATE TRIGGER updateWidgetSale BEFORE UPDATE on widgetSale
 * *    BEGIN
 * *        SELECT RAISE(ROLLBACK,'cannot update table "widgetSale"') FROM widgetSale
 * *             WHERE id = NEW.id AND reconciled = 1;
 * *    END;
 * 
 * * BEGIN TRANSACTION;
 * * UPDATE widgetSale SET quan = 9 WHERE id = 2;
 * * END TRANSACTION;
 * 
 * * SELECT * FROM widgetSale;
 * 
 * & Creating a sub-select
 * * CREATE TABLE t (a TEXT, b TEXT);
 * 
 * * INSERT INTO t VALUES ('NY0123','US4567');
 * * INSERT INTO t VALUES ('AZ9437','GB1234');
 * * INSERT INTO t VALUES ('CA1279','FR5678');
 * * SELECT * FROM t;
 * 
 * * SELECT SUBSTR(a,1,2) AS State, SUBSTR(a,3) AS StateCode,
 * *     SUBSTR(b,1,2) AS Country, SUBSTR(b,3) AS CountryCode FROM t;
 * 
 * 
 * & Searching within a result set
 * * SELECT * FROM album WHERE id IN (SELECT DISTINCT album_id FROM track WHERE duration <= 90);
 * 
 * & Creating view
 * * CREATE VIEW
 * *    SELECT id,album_id,title,track_number,
 * *    duration / 60 AS minutes,duration % 60 AS seconds FROM track;
 * * DROP VIEW IF EXISTS <name of view>
 * 
 * & Creating a joined view
 * * CREATE VIEW joinedAlbum AS
 * *    SELECT a.artist AS artist,
 * *        a.title AS album,
 * *        t.title AS track,
 * *        t.track_number AS track_no,
 * *        t.duration / 60 AS minutes,
 * *        t.duration % 60 AS seconds
 * *    FROM track AS t
 * *        JOIN album AS a
 * *            ON a.id = t.album_id;
 * 
 *            
*/ 

const syntaxes = {
    '*'                 : 'All',
    'SELECT'            : 'The SELECT statement is used to retrieve data from a SQL database',
    'AS'                : 'Changes column name',
    'FROM'              : 'Decides which table',
    'ORDER BY'          : 'Sorting',
    'WHERE'             : 'Like if statement',
    'LIMIT'             : 'Return first n rows',
    'OFFSET'            : 'Return after m rows',
    'COUNT'             : 'Return number of rows',
    'AND'               : 'For more statements',
    'INSERT INTO'       : 'Inserts data to the table',
    'VALUES'            : 'Data values',
    'UPDATE'            : 'Update the selected (id,name,....) data',
    'SET'               : 'Sets the values to the database',
    'DELETE'            : 'Deleting from data some row',
    'CREATE'            : 'Used for creating',
    'TABLE'             : 'Table',
    'INTEGER'           : 'Type of data integer',
    'TEXT'              : 'Type of data text',
    'DROP'              : 'Delete table',
    'IF'                : 'If Statement',
    'EXISTS'            : 'Exist or not',
    'DEFAULT'           : 'Default',
    'NULL'              : 'Special value of none value',
    'IS'                : 'Use when you cant compare value',
    'NOT'               : 'Means opposite',
    'UNIQUE'            : 'Do not allow duplicates',
    'ADD'               : 'Add some columns',
    'ALTER TABLE'       : 'The statement is used to add, delete, or modify columns in an existing table',
    'PRIMARY KEY'       : 'The PRIMARY KEY constraint uniquely identifies each record in a table',
    'DESC'              : 'Descending',
    'OR'                : 'Binding operation',
    'DISTINCT'          : 'Different',
    'ASC'               : 'Ascending',
    'CASE'              : 'Case',
    'WHEN'              : 'When its true or equal to specific value',
    'THEN'              : 'Then do something',
    'ELSE'              : 'Else',
    'END'               : 'End of statement',
    'JOIN'              : 'Joining other tables',
    'LENGTH'            : 'Length of string',
    'TRIM'              : 'Use for unwanted spaces',
    'LOWER'             : 'For lower case',
    'UPPER'             : 'For upper case',
    'TYPEOF'            : 'Returns a type of value',
    'GROUP BY'          : 'Sorts by groups',
    'MIN'               : 'Minimum',
    'MAX'               : 'Maximum',
    'SUM'               : 'Summation',
    'AVG'               : 'Average',
    'BEGIN TRANSACTION' : '',
    'ROLLBACK'          : '',
    'TRIGGER'           : '',
    'NEW'               : '',
    'VIEW'              : '',

}