# Persistenz

## JDBC

JDBC ist ein Framework für Java, welches direkten Zugriff auf die DB erlaubt.

<img src="/home/sebi/.config/Typora/typora-user-images/image-20221205133425929.png" alt="image-20221205133425929" style="zoom:50%;" />

Der folgende Code ist ein Beispiel für JDBC.

```java
public class DbTest {
    public static void main(String[] args)
    		throws ClassNotFoundException, SQLException {
        
        Connection con = DriverManager.getConnection(
        	"jdbc:postgresql://test.zhaw.ch/testdb",
        	"user", "password");
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("SELECT * FROM test ORDER BY name");
        while (rs.next()) {
            System.out.println("Column 1 contains '" + rs.getString(2) +"'");
        }
        
        con.close();
    }
}
```

## Patterns für Persistenz

Grundsätzlich gilt: **Persistenz und Domainmodel *nicht* mischen!!!!**

### Active Record (Anti-Pattern)
Beim Active Record Pattern ist jede Entität selbst dafür zuständig. Dies ist aber ein Anti-Pattern, da die Kohäsion sehr tief wird. Zusätzlich leidet die Testbarkeit deutlich.

### Data Access Object (DAO)

Abstrahiert und kapselt den Zugriff auf die Datenquelle. Nun gibt es zwei Klassen, welche beide eine hohe Kohäsion haben. Dies funktioniert gut für einfache Fälle, wird aber kompliziert für grössere Applikation. Dies liegt daran, dass DAO keine Relationen unterstützen und dies von Hand implementiert werden muss.
<img src="/home/sebi/.config/Typora/typora-user-images/image-20221205133117520.png" alt="image-20221205133117520" style="zoom:80%;" />### Data Access Object (DAO)

Abstrahiert und kapselt den Zugriff auf die Datenquelle. Nun gibt es zwei Klassen, welche beide eine hohe Kohäsion haben. Dies funktioniert gut für einfache Fälle, wird aber kompliziert für grössere Applikation. Dies liegt daran, dass DAO keine Relationen unterstützen und dies von Hand implementiert werden muss.
<img src="/home/sebi/.config/Typora/typora-user-images/image-20221205133117520.png" alt="image-20221205133117520" style="zoom:80%;" />

Der folgende Code zeigt ein Beispiel für ein DAO:

```java
//Interface to be implemented by all ArticleDAOs
public interface ArticleDAO {
    public void insert(Article item);
    public void update(Article item);
    public void delete(Article item);
    public Article findById(int id);
    public Collection<Article> findAll();
    public Collection<Article> findByName (String name);
    public Collection<Article> findByPrice (float price);
    ...
}

public class Article {
    private long id;
    private String name;
    private float price;
    
    public long getId(){
    	return id;
    }
    public void setId(long id) {
    	this id = id
    }
    ...
}
```

### O/R Data Mapper

Separate Klasse für das Mapping oder Einsatz eines ORM. Das ORM kann Beziehungen automatisch direkt auflösen.

Wenn ein O/R Mapper benützt wird, ist die Anwendungslogik stark entkoppelt von der Datenbank. 

![image-20221205133230870](/home/sebi/.config/Typora/typora-user-images/image-20221205133230870.png)

Für JPA ist das folgende das Minimum für eine Identität:
```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    // there are also TableMapper and Auto strategies.
    private long id;
    private String name;
    private String lastName;
}
```

Folgendermassen werden Beziehungen definiert.![image-20221205135308936](/home/sebi/.config/Typora/typora-user-images/image-20221205135308936.png)