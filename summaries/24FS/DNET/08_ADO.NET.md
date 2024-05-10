# ADO.NET

![image-20240510141628101](./res/08_ADO.NET/image-20240510141628101.png)

## Data Provider

Ein Data Provider hat folgende Hauptelemente

1. `Connection`: Stellt eine Verbindung her

   ```c#
   using System.Data.Sql; // abhängig von dem sepzifischen nuget packet
   
   SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=FlughafenDB; Integrated Secruity=true");
   connection.Open();
   // do work here
   // or use: using(connection) {connection.Open(); ...}
   connection.Close();
   ```

   Im hintergrund verwendet ADO.NET ein Connection-Pool.

2. Command: Führt ein Befehl aus und exponiert Parameter und kann in einer Transaktion ausgeführt werden
   ```c#
   using (SqlCommand command = new SqlCommand(
       "INSERT INTO L (LNR, LName, Status, Stadt) VALUES (@LNR, @LName, @Status, @Stadt)", connection))
   {
       // CommandType.Text sends sql commands directly to the server
   	// Alternatively, StoredProcedure calls a store procedure and 
   	// and TableDirect is not relevant
       command.CommandType = CommandType.Text;
       command.Parameters.AddWithValue("@LNR", "ZHAW");
       command.Parameters.AddWithValue("@LName", "Zürcher FH");
       command.Parameters.AddWithValue("@Status", 4);
       command.Parameters.AddWithValue("@Stadt", "Winterthur");
       // Open the connection and execute the reader.
       connection.Open();
       // ExeuteNonQuery doesn't return a result	
        // Alternatively, ExecuteScalar() returns a single vaule
       // or ExecuteReader() returns a DataReader
       int rowsAffected = command.ExecuteNonQuery();
       connection.Close();
   }
   ```

3. `DataReader`: liest von einer schreibgeschützten Datenstrom

   ```c#
   using (SqlConnection connection = new SqlConnection(connectionString)) {
       // Create the command and set its properties.
       using (SqlCommand command = new SqlCommand())
       {
           command.Connection = connection;
           command.CommandText = "SalesByCategory";
           command.CommandType = CommandType.StoredProcedure;
           // Add one input parameter and set its properties.
           SqlParameter parameter = new SqlParameter();
           parameter.ParameterName = "@CategoryName";
           parameter.SqlDbType = SqlDbType.NVarChar;
           parameter.Direction = ParameterDirection.Input;
           parameter.Value = "Category";
           // Add the parameter to the Parameters collection.
           command.Parameters.Add(parameter);
           // Open the connection and execute the reader.
           connection.Open();
           using (SqlDataReader reader = command.ExecuteReader()) {
               if (reader.HasRows) {
                   while (reader.Read()) {
                       Console.WriteLine("{0}: {1:C}", reader[0], reader[1]);
                   }
               }
           }
       }
   }
   ```

4. `DataAdapter`: List eine Menge von Tabellen und füllt diese in ein `DataSet` ab

   ```c#
   // Create the data adapter and the select command.
   SqlDataAdapter customerAdapter = new SqlDataAdapter();
   customerAdapter.SelectCommand = 
       new SQLCommand("SELECT * FROM dbo.Customers", connection);
   // Create the data set (holding the result).
   DataSet customerOrders = new DataSet();
   
   // Read the data from the database and output each record.
   customerAdapter.Fill(customerOrders, "Customers");
   foreach (DataRow customerRow in customerOrders.Tables["Customers"].Rows)
   {
   	Console.WriteLine(customerRow["CustomerID"]);
   }
   ```

   `DataAdapter` hat 4 Command Objekte fields `SelectCommand`, `InsertCommand`, `UpdateCommand` und `DeleteCommand`. 
   Die `Fill()` funktion liest Daten. `Update()` ändert Daten (e.g. insert, update und delete)

   ```c#
   using (SqlConnection connection = new SqlConnection(connectionString)) {
       // Create the data adapter and the select command.
       SqlDataAdapter categoryAdpater = new SqlDataAdapter(
           "SELECT CategoryID, CategoryName FROM Categories", connection);
       
       // Create the update command.
       categoryAdpater.UpdateCommand = new SqlCommand(
           "UPDATE Categories SET CategoryName = @CategoryName " +
           "WHERE CategoryID = @CategoryID", connection);
       
       // Add the parameters for the UpdateCommand.
       categoryAdpater.UpdateCommand.Parameters.Add(
           "@CategoryName", SqlDbType.NVarChar, 15, "CategoryName");
       SqlParameter parameter = categoryAdpater.UpdateCommand.Parameters.Add(
           "@CategoryID", SqlDbType.Int);
   
       parameter.SourceColumn = "CategoryID";
       parameter.SourceVersion = DataRowVersion.Original;
       
       // Load the data from the DB into the table of the dataset
       DataTable categoryTable = new DataTable();
       categoryAdpater.Fill(categoryTable);
       
       // Change the value of the attribute CategoryName of the first row (in memory)
       DataRow categoryRow = categoryTable.Rows[0];
       categoryRow["CategoryName"] = "New Beverages";
       
       // Propagate all changes to the DB
       categoryAdpater.Update(categoryTable);
   }
   ```

5. Transaction
   Jeder Data Provider hat einie eigene `Transaction` Class.

   ```c#
   // Start a local transaction.
   SqlTransaction sqlTransaction = connection.BeginTransaction();
   // Enlist a command in the current transaction.
   SqlCommand command = connection.CreateCommand();
   command.Transaction = sqlTransaction;
   // execute some commands...
   ...
   In welcher Transaktion wird
   // Commit the transaction.
   sqlTransaction.Commit();
   ```

   Oder ein grösseres Beispiel:
   ```c#
   using (SqlConnection connection = new SqlConnection(connectionString)) {
       connection.Open();
       // Start a local transaction.
       SqlTransaction sqlTransaction = connection.BeginTransaction();
       // Enlist a command in the current transaction.
       SqlCommand command = connection.CreateCommand();
       command.Transaction = sqlTransaction;
       try {
           // Execute two separate commands.
           command.CommandText = "INSERT INTO Production.ScrapReason (Name) VALUES ('Wrong size')";
           command.ExecuteNonQuery();
           command.CommandText = "INSERT INTO Production.ScrapReason (Name) VALUES ('Wrong color')";
           command.ExecuteNonQuery();
           // Commit the transaction.
           sqlTransaction.Commit();
           Console.WriteLine("Both records were written to database.");
       }
       catch (Exception ex) {
           // Handle the exception if the transaction fails to commit.
           Console.WriteLine(ex.Message);
           try {
               // Attempt to roll back the transaction.
               sqlTransaction.Rollback();
           }
           catch (Exception exRollback) {
               // Throws an InvalidOperationException if the connection is closed or
               // the transaction has already been rolled back on the server.
               Console.WriteLine(exRollback.Message);
           }
       }
   }
   ```

   Oder mit using:
   ```c#
   // Create the TransactionScope to execute the commands, guaranteeing
   // that all commands can commit or roll back as a single unit of work.
   using (TransactionScope transactionScope = new TransactionScope()) {
       using (SqlConnection connection = new SqlConnection(connectString)) {
           // Opening the connection automatically enlists it in the TransactionScope
           connection.Open();
           ...
           // Create the SqlCommand object.
           SqlCommand command = new SqlCommand(commandText, connection);
           ...
       }
       // The Complete method commits the transaction. 
       // If an exception has been thrown,
       // complete is not called and the transaction is rolled back.
       transactionScope.Complete();
   }
   ```

6. Distributed Transaction
   Falls der SQL Server die Leitung der Verteilung übernimmt, wird die Transaktion mit `BEGIN DISTRIBUTED TRANSACTION` begonnen.
   Alternative kann die Transaktion über C# verteilt werden:

   ```c#
   // Create the TransactionScope to execute the commands, guaranteeing
   // that both commands can commit or roll back as a single unit of work.
   using (TransactionScope scope = new TransactionScope()) {
       using (SqlConnection connection1 = new SqlConnection(connectString1)) {
           // Opening the connection automatically enlists it in the
           // TransactionScope as a lightweight transaction.
           connection1.Open();
           // Create the SqlCommand object and execute the first command.
           SqlCommand command1 = new SqlCommand(commandText1, connection1);
           returnValue = command1.ExecuteNonQuery();
           writer.WriteLine("Rows to be affected by command1: {0}", returnValue);
           // If you get here, this means that command1 succeeded. By nesting
           // the using block for connection2 inside that of connection1, you
           // conserve server and network resources as connection2 is opened
           // only when there is a chance that the transaction can commit.
           using (SqlConnection connection2 = new SqlConnection(connectString2)) {
               // The transaction is escalated to a full distributed transaction when
               // connection2 is opened.
               connection2.Open();
               // Execute the second command in the second database.
               SqlCommand command2 = new SqlCommand(commandText2, connection2);
               returnValue = command2.ExecuteNonQuery();
               writer.WriteLine("Rows to be affected by command2: {0}", returnValue);
           }
       }
       // The Complete method commits the transaction. If an exception has 
       // been thrown, Complete is not called and the transaction is rolled back.
       scope.Complete();
   }
   ```

7. `CommandBuilder`
   Der `CommandBuilder` kann anhand des Select Befehls die Insert, Update und Delete Befehle generieren.

   ```c#
   // Assumes that connection is a valid SqlConnection object and already opened
   SqlDataAdapter adapter = 
       new SqlDataAdapter( "SELECT * FROM dbo.Customers", connection);
   adapter.Fill(dataSet, "Customers");
   SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
   ...
   // generate statements to modify the DataSet
   builder.GetUpdateCommand();
   ```

8. ConnectionStringBuilder
   ```c#
   SqlConnectionStringBuilder builder =
       new SqlConnectionStringBuilder("server=(local);user id=ab;" + 
   		"password=Winter1234;initial catalog=AdventureWorks");
   // Now that the connection string has been parsed, you can work 
   // with individual items.
   builder.Password = "new@1Password";
   // You can refer to connection keys using strings, as well.
   builder["Server"] = ".";
   builder["Connect Timeout"] = 1000;
   builder["Trusted_Connection"] = true;
   Console.WriteLine(builder.ConnectionString);
   ```

9. Parameter
   Dies macht SQL Befehle mehr Typ-sicher und effizienter (dader Build Befehl nicht neu gebaut werden muss).

   ```c#
   SqlCommand command = new SqlCommand("SELECT * FROM Authentication " +
                                       "WHERE Username = @Username and Password = @Password", connection);
   command.CommandType = CommandType.Text;
   // Create the first parameter and add it to the collection
   SqlParameter userName = new SqlParameter();
   userName.ParameterName = "@Username";
   userName.Value = txt1.Text;
   command.Parameters.Add(userName);
   // Create the second parameter and add it to the collection
   SqlParameter password = new SqlParameter();
   password.ParameterName = "@Password";
   password.Value = txt2.Text;
   command.Parameters.Add(password);
   SqlDataReader reader = command.ExecuteReader();
   if (reader.HasRows) {
       Console.WriteLine("{0}", reader[0]);
   }
   else { errorlbl.Text = "Incorrect username and password"; }
   ```

   

10. DbException
    Die Exception enthalt noch mehr Infos über wo und was schief ging.

## Verwendung

### `DataReader`

Erlaubt es read-only daten direkt abzurufen

### `DataSet`

### LINQ to SQL

### Entity Framework