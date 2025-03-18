## Mongo DB    

1. DBs were created using protocols thaat browsers don't understand.
2. DBs don't have granual access as a first class citizen. Very hard to do user specific acccess in them.
3. There are some Dbs(firebase) that let you get rid of the http server and try their best to give you granual acess.

DBs usually allow to 4 primitives 
- Create data
- Read data
- Update data
- Delete data

ORMs are the library that lets you talk to the database, Prisma is the popular one, but we are using Mongoose for the meanwhile.
Mongoose makes you define schema for things like autocompletions, Validating data before it goes into DBs to make sure you're doing right thing. 
Schemaless DBs bohot khatarnak hain rey baba, itna khatra nahi lene ka isiliye use Mongoose. 