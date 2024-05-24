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

> 