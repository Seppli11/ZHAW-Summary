# Stuff

## Javadoc (L1)

Beschreiben Sie in Javadoc den Zweck der von Ihnen erstellten Klassen und Interfaces.

Dokumentieren Sie ausserdem Methoden in Interfaces, abstrakte  Methoden sowie öffentliche Methoden von Klassen, die die Rolle von  internen Schnittstellen einnehmen wie zum Beispiel Data Access Objects.  Für Methoden ist es wichtig, dass der Javadoc-Kommentar den Vertrag  zwischen Methode und anwendendem Code beschreibt:

- Es ist erklärt, *was* die Methode macht.
- Es sind sämtliche Vorbedingungen aufgelistet (z.B., dass Argument nicht `null` sein darf).
- Es sind sämtliche Nachbedingungen aufgelistet (z.B., dass retournierte Collection nie `null` sein kann).
- Es ist jede Exception aufgelistet, die auftreten kann und in welcher Situation das passiert.
- Jeder Parameter ist beschrieben.
- Sofern sinnvoll ist der Rückgabewert beschrieben.

Für abstrakte Methoden ist ausserdem wichtig, dass Sie beschreiben, welche Erwartungen an eine Implementierung gestellt werden.

## Gute Commits (L2)

Tim Pope hat 2008 auf seinem Blog beschrieben, was eine gute Commit-Nachricht für Git ausmacht. Und hat dazu diese Modell-Nachricht verfasst:

    Capitalized, short (50 chars or less) summary
    
    More detailed explanatory text, if necessary.  Wrap it to about 72
    characters or so.  In some contexts, the first line is treated as the
    subject of an email and the rest of the text as the body.  The blank
    line separating the summary from the body is critical (unless you omit
    the body entirely); tools like rebase can get confused if you run the
    two together.
    
    Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
    or "Fixes bug."  This convention matches up with commit messages generated
    by commands like git merge and git revert.
    
    Further paragraphs come after blank lines.
    
    - Bullet points are okay, too
    
    - Typically a hyphen or asterisk is used for the bullet, followed by a
      single space, with blank lines in between, but conventions vary here
    
    - Use a hanging indent

— Tim Pope
A Note About Git Commit Messages

Folgen Sie seinem Rat, und Ihre History wird gleichzeitig informativ und einfach zu verfolgen sein: