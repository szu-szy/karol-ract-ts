TODO:

1. Praca z API (FETCH_API_JS.pdf)
2. Conditional rendering (React_new.pdf - slajd 22)
3. Cykle życia komponentów (React_new.pdf - slajd 17)
4. Use Memo (React Hooks.pdf - slajd 17)
5. UseRef (React Hooks.pdf - slajd 12)
6. React context + UseContext (React Context.pdf)
7. Redux (React Redux.pdf)

// Zadania

# API

Link do fake API
https://dummyjson.com/docs/products

GET
utwórz funkcje fetchData która pobiera liste produktów i wypisuje tablice elementów w konsoli
PUT
utwórz funkcje updateData która aktualizuje nazwe produktu i wynik wyswietla w konsoli
POST
utwórz funkcje która tworzy nowy produkt i wyswietla alert z nowo utworzonym produktem dzieki metodzie "alert('')"
DELETE
usuń dowolny produkt z zakresu 1-100 i wyswietl usuniety produkt w konsoli

1. stworz przycisk do pobierania danych napisz funkcje za pomoca metodych fetch do pobierania listy uzytkownikow lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku aby to sie wykonalo musimy dodac event listener do przycisku na event click

2. na bazie zadania poprzedniego utworz funkcje ktora na bazie pobranej listy dodaje nam elementy do listy uzytkownikow

3. kazdy z elementów powinien miec przycisk do usuwania aktualnego elementu, element powinien zostac usuniety z widoku oraz wyslac zapytanie o usuniecie uzytkownika po ID

4. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100 stworz funkcje do pobierania pojedynczego uzytkownika przypisz do formularza utworzona funkcje po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli

5. stworz formularz ktory bedzie aktualizowal firstName oraz lastName uzytkownika formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko) oraz przycisk input od id powinien byc sprawdzany (min=1, max=100) napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego uzytkownika przypisz funkcje jako event listener do formularza

# Conditional rendering

1. Wyświetlanie komunikatu (operator &&)
   Stwórz komponent, który będzie wyświetlał komunikat "Witaj, użytkowniku!" tylko wtedy, gdy użytkownik jest zalogowany. W przeciwnym razie nie powinno nic wyświetlać.

2. Przycisk (operator ||)
   Stwórz komponent, który będzie wyświetlał przycisk "Zapisz" tylko wtedy, gdy formularz został wypełniony poprawnie. W przeciwnym razie powinien wyświetlać komunikat "Uzupełnij wszystkie pola".

3. Wybór opcji (operator trójargumentowy)
   Stwórz komponent, który będzie wyświetlał różne opcje w zależności od wybranej kategorii produktu. Jeśli kategoria to "Elektronika", pokaż opcje "Laptop", "Smartfon", "Telewizor". Jeśli kategoria to "Odzież", pokaż opcje "Koszulka", "Spodnie", "Buty".

4. Filtrowanie listy (operator !)
   Stwórz komponent, który będzie wyświetlał listę produktów. Jeśli lista nie jest pusta, pokaż produkty. W przeciwnym razie pokaż komunikat "Brak produktów".

5. Walidacja formularza (operator !==)
   Stwórz formularz rejestracji, który będzie wyświetlał komunikat błędu, jeśli hasło i potwierdzenie hasła nie są takie same. W przeciwnym razie powinien wyświetlać komunikat "Hasła są zgodne".

# Cykle zycia komponentu

1. Inicjalizacja stanu

- Teoria:
  Hook useEffect jest używany do wykonywania efektów ubocznych w komponentach funkcyjnych.
  Jeden z jego przypadków użycia to inicjalizacja stanu komponentu, np. pobranie danych z API podczas pierwsznego renderowania.

- Zadanie:
  Stwórz komponent, który będzie wyświetlał listę użytkowników pobraną z API.
  Użyj hooka useEffect z pustą tablicą zależności, aby pobrać dane z API podczas pierwsznego renderowania komponentu.

2. Aktualizacja stanu

- Teoria:
  Hook useEffect może być również użyty do obserwowania zmian w stanie lub propsach komponentu.
  Jeśli zależności hooka się zmienią, efekt zostanie ponownie wykonany.

- Zadanie:
  Stwórz komponent, który będzie wyświetlał licznik. Użyj hooka useEffect z zależnością od stanu licznika,
  aby zaktualizować tytuł strony za każdym razem, gdy licznik się zmieni.

3. Czyszczenie efektów

- Teoria:
  Hook useEffect może zwracać funkcję czyszczącą, która jest wywoływana przed odmontowaniem komponentu
  lub przed ponownym wykonaniem efektu w przypadku zmiany zależności.

- Zadanie:
  Stwórz komponent, który będzie wyświetlał interwał czasowy.
  Użyj hooka useEffect do ustawienia interwału i zwróć funkcję czyszczącą, k
  tóra będzie czyścić interwał przed odmontowaniem komponentu.

4. Renderowanie

- Teoria:
  Hook useEffect może być również użyty do obserwowania renderowania komponentu.
  Jeśli nie podasz żadnych zależności, efekt będzie wykonywany po każdym renderowaniu.

- Zadanie:
  Stwórz komponent, który będzie wyświetlał liczbę renderowań.
  Użyj hooka useEffect bez żadnych zależności, aby zwiększać licznik renderowań po każdym renderowaniu komponentu.

5. Odmontowanie

- Teoria:
  Funkcja czyszcząca zwracana przez hook useEffect jest wywoływana przed odmontowaniem komponentu.

- Zadanie:
  Stwórz komponent, który będzie wyświetlał komunikat "Komponent jest zamontowany".
  Użyj hooka useEffect z pustą tablicą zależności, aby wyświetlić ten komunikat w konsoli podczas montowania komponentu.
  Zwróć funkcję czyszczącą, która będzie wyświetlać komunikat "Komponent jest odmontowany" w konsoli podczas odmontowywania komponentu.

# useMemo

Hook useMemo w React służy do memoizacji (zapamiętywania) wartości obliczonych. Pozwala to na uniknięcie ponownych, kosztownych obliczeniach, jeśli dane wejściowe nie uległy zmianie. Jest to szczególnie przydatne w przypadku operacji, które są czasochłonne lub wykonywane często, co może wpłynąć na wydajność aplikacji.

1. Filtrowanie listy
   Zadanie: Stwórz komponent, który będzie wyświetlał listę produktów. Dodaj pole wyszukiwania, które będzie filtrować listę produktów na podstawie wprowadzonego tekstu. Użyj hooka useMemo do zapamiętania przefiltrowanej listy produktów, aby uniknąć ponownego filtrowania, jeśli lista produktów lub tekst wyszukiwania się nie zmienią.

# useRef

Hook useRef w React służy do przechowywania wartości, które przetrwają między renderowaniami komponentu. Zwraca on obiekt ref, który może być używany do przechowywania dowolnej wartości, takiej jak referencja do elementu DOM, licznik lub dowolny inny stan, który nie powinien powodować ponownego renderowania komponentu.

1. Fokus na elemencie (useRef)
   Zadanie: Stwórz komponent, który będzie wyświetlał pole tekstowe. Użyj hooka useRef do przechowywania referencji do tego pola tekstowego. Dodaj przycisk, który po kliknięciu ustawi fokus na polu tekstowym, korzystając z referencji przechowanej w useRef.

2. Licznik renderowań (useRef)
   Zadanie: Stwórz komponent, który będzie wyświetlał liczbę renderowań. Użyj hooka useRef do przechowywania licznika renderowań. Zwiększaj wartość licznika w hooku useEffect bez żadnych zależności, aby był on wywoływany po każdym renderowaniu. Wyświetl wartość licznika z useRef w komponencie.

# context

React Context umożliwia przekazywanie danych (stanu) przez drzewo komponentów bez konieczności ręcznego przekazywania propsów na każdym poziomie. Jest to przydatne w przypadku, gdy wiele komponentów na różnych poziomach drzewa potrzebuje dostępu do tych samych danych.

1. Zadanie: Stwórz aplikację, która będzie wyświetlać motyw (jasny lub ciemny) oraz umożliwiać jego przełączanie. Użyj React Context do zarządzania stanem motywu i udostępniania go dla wszystkich komponentów, które go potrzebują.

Kroki:

Utwórz kontekst za pomocą React.createContext().
Stwórz komponent dostawcy kontekstu (np. ThemeProvider), który będzie zarządzać stanem motywu i udostępniać go za pomocą wartości kontekstu.
Obuduj główny komponent aplikacji (np. App) dostawcą kontekstu.
W komponencie App, zaimplementuj logikę przełączania motywu i przekaż aktualny motyw jako wartość kontekstu.
Stwórz kilka komponentów potomnych (np. Header, Content, Footer), które będą korzystać z wartości motywu z kontekstu.
W komponentach potomnych, użyj hooka useContext do pobrania wartości motywu z kontekstu.
Dostosuj style komponentów potomnych w zależności od pobranego motywu.

# react redux

React Redux to biblioteka, która umożliwia integrację React z Redux, wzorcem zarządzania stanem aplikacji. Redux zapewnia scentralizowane miejsce do przechowywania stanu aplikacji, co ułatwia zarządzanie nim i debugowanie.

1. Zadanie: Stwórz aplikację zakupową, która będzie wyświetlać listę produktów, koszyk zakupów oraz umożliwiać dodawanie i usuwanie produktów z koszyka. Użyj React Redux do zarządzania stanem aplikacji.

Kroki:

Skonfiguruj Redux store i reducer.

Zdefiniuj akcje dla dodawania i usuwania produktów z koszyka.
Utwórz reducer, który będzie obsługiwać te akcje i aktualizować stan koszyka.
Utwórz store Redux, przekazując reducer.
Połącz React z Redux za pomocą react-redux.

Obuduj główny komponent aplikacji (np. App) za pomocą Provider z react-redux.
Przekaż store Redux do Provider.
Stwórz komponent ProductList, który będzie wyświetlać listę produktów.

Użyj useSelector z react-redux do pobrania listy produktów ze store.
Wyświetl listę produktów.
Dodaj przycisk "Dodaj do koszyka" dla każdego produktu.
Użyj useDispatch z react-redux do dyspatchowania akcji dodawania produktu do koszyka po kliknięciu przycisku.
Stwórz komponent Cart, który będzie wyświetlać koszyk zakupów.

Użyj useSelector z react-redux do pobrania zawartości koszyka ze store.
Wyświetl listę produktów w koszyku.
Dodaj przycisk "Usuń" dla każdego produktu w koszyku.
Użyj useDispatch z react-redux do dyspatchowania akcji usuwania produktu z koszyka po kliknięciu przycisku "Usuń".
Zintegruj komponenty ProductList i Cart w głównym komponencie App.
