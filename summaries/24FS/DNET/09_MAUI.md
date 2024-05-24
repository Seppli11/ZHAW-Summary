# MAUI

UI Framework, welches unter IOS, Android, MacOS und Windows (nicht Linux).

<img src="./res/09_MAUI/image-20240524140830209.png" alt="image-20240524140830209" style="zoom:50%;" />

## Controls

![image-20240524141202101](./res/09_MAUI/image-20240524141202101.png)

### Shell App

### Pages

Eine Anwendung besteht aus einner oder mehreren Pages und nimmt immer den gesamten Bildschirm ein.

In Shell Apps können nur ContentPages vverwendet. Der Rest werden durch Shell Apps abgelst.

### Layouts

Werden verwendet um Controlls in visuellen Strukturen zusammenzustellen.

* `AbsoluteLayout`
  Positionen müssen absolut angegeben werden
* `BindableLayout`
* `FlexLayout`
  Wie Flex Boxen
* `Grid`
* `HorizontalStackLayout`/`VerticalStackLayout`
* `StackLayout`
  Kann horizontal wie vertikal kinder anordnen. Es es wie `Horizontal-` und `VerticalStackLayout`. Es ist allerdings weniger perfomant. 

### Views

Views sind die eigentlichen UI Elementen

* BlazorWebView
  Kann eine Blazor App embedden
* Border
  Fügt ein Ramen hinzu
* BoxView
* Frame
* GraphicView
  Kann zeichnen
* Image
* Label
  Single und Multi-line text
* Map
  Es wird zusätzlich noch ein Paket verlangt, da WinUI dies nicht unterstützt.
* ScrollView
* Shapes
* WebView
* Button
* ImageButton
* RadioButton
* RefreshView
  Ermöglicht pull-to-refresh 
* SearchBar
* SwipeView
* CheckBox
* DatePicker
  DAtum ohne Zeit
* Slider
* Stepper
* Switch
* TimePicker
* Editor
  Edit multiline text
* Entry
  Edit single-line text. Optional auch Passwort-Feld
* ActivityIndicator
* ProgressBar
* CarouselView
* CollectionView
* IndicatorView
* ListView (depricated, benütz CollectionView)
* Picker
  Wie Combobox
* TableView (depricated, benützt CollectionView)
* ContentView
  Kann benützt werden um eigene Controlls zu bauen.

Popups:

* DisplayAlert
* DisplayActionSheet
* DisplayPrompt

Popups sind platform übergreifend gleich. Allerdings ist das Style anderst.

Auf Desktops kann noch eine Menu Bar erstellt werden.

Styling kann mit XAML oder CSS gemacht werden.

Ebenfalls sind Gestures unterstützt. Konkret: Drag & Drop, Pan, Pinch, Swipe and Tap

## App Lifecycle

![image-20240524143344372](./res/09_MAUI/image-20240524143344372.png)

* Deactivated: Wenn ein anderes Fenster den Fokus erhältet (IOS/Android)
* Stopped: Der Benutzer wechselt zu einer anderen App oder zum Homescreen (IOS/Android)

In der folgenden Tabelle steht, wie auf die nativen Events übersetzt werden können.

![image-20240524143450655](./res/09_MAUI/image-20240524143450655.png)

## Deployment

Auf Windows:

![image-20240524144920949](./res/09_MAUI/image-20240524144920949.png)

> EXE funktioniert aktuell noch nicht super und ist recht gebastelt. Es soll MSIX verwendet werden

Auf Android:

![image-20240524145113129](./res/09_MAUI/image-20240524145113129.png)

> APK für side loading; AAB wird für Google Play Store verwendet

Auf iOS:

![image-20240524145211195](./res/09_MAUI/image-20240524145211195.png)

> AdHoc kann benutzt werden um die App zu testen. Limitiert auf 100 Personen / Jahr. Es braucht eine Kabel-Verbindung zu einem Mac. 

Auf macOS:

![image-20240524145510665](./res/09_MAUI/image-20240524145510665.png)

Kosten (vor EU's Digital Marketplace Act):

![image-20240524145535983](./res/09_MAUI/image-20240524145535983.png)

## Beispiel App

![image-20240524150345370](./res/09_MAUI/image-20240524150345370.png)

> `App` hat eine partielle Klasse, welche davor noch Initialisierungs Code ausführt

![image-20240524150504633](./res/09_MAUI/image-20240524150504633.png)

AppShell:

![image-20240524150536350](./res/09_MAUI/image-20240524150536350.png)

Im Resource Ordner können Resource, wie Fonts, Bilder, etc. gespeichert werden, welche von allen Platform genutzt werden können. Zusätzlich muss noch die richige Build Action ausgewählt werden. 

![image-20240524150922620](./res/09_MAUI/image-20240524150922620.png)

