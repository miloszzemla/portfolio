# Lisek — Program lojalnościowy „Lisek Points"

**Rola:** Product Designer · **Platforma:** iOS & Android · **Timeline:** ~4 miesiące · **Zespół:** PM, 2 developerów, analityk danych, ja

---

## 1. Problem

Lisek ma 5M+ zamówień, ale większość użytkowników zamawia sporadycznie — średnio 1.4 zamówienia na miesiąc. Brak mechanizmu, który nagradza regularność. Użytkownicy nie mają powodu, żeby wybierać Lisek zamiast konkurencji (Żabka, Glovo, Bolt Food) — decyduje cena w danym momencie, nie relacja z marką.

**Metryki wejściowe:**
- Średnia częstotliwość zamówień: 1.4/miesiąc
- Churn po 60 dniach: 41%
- Brak aktywnego programu lojalnościowego — jedynie jednorazowe kody rabatowe

**Design question:**
Jak zbudować system lojalnościowy, który nagradza częstotliwość zakupów, a nie tylko wartość koszyka?

---

## 2. Research

**Metody:**
- 10 wywiadów z użytkownikami (heavy shoppers + churned users)
- Analiza kohortowa — co odróżnia użytkowników 4+/mies. od reszty
- Benchmark 6 programów lojalnościowych (Starbucks Rewards, Żappka, Biedronka, Bolt, Uber One, Amazon Fresh)

**Kluczowe insighty:**

| # | Insight | Źródło |
|---|---------|--------|
| 1 | Użytkownicy nie reagują na „zbieraj punkty" — nie widzą wartości, bo nagrody są zbyt odległe | 8/10 wywiadów |
| 2 | Najsilniejszy motywator to darmowa dostawa, nie rabaty procentowe | Analiza kohortowa |
| 3 | Użytkownicy 4+/mies. mają wyższy AOV (+22%) — to nie kwestia ceny, a nawyk | Dane wewnętrzne |
| 4 | Programy z widocznym „paskiem postępu" (streak) mają 2x wyższy engagement niż programy punktowe | Benchmark |

**Cytat użytkownika:**
> „Mam apkę Żabki, Biedronki, Lidla — wszędzie jakieś punkty, których nigdy nie wydaję. Nie chcę kolejnego programu, chcę po prostu płacić mniej za to, co kupuję regularnie."
> — Kasia, 28 lat, zamawiała z Liska 2x/tydzień, potem przeszła na Żabkę

---

## 3. Iteracje

### V1: Klasyczny program punktowy
Standardowy model — 1 zł = 1 punkt, nagrody w katalogu (rabaty, darmowe produkty).

**Co działało:** Prosty do zrozumienia
**Co nie działało:** Użytkownicy w testach mówili „kolejny program, którego nie będę używać". Engagement w prototypie: 12% kliknięć w zakładkę Rewards.

### V2: Streak-based — „Twój tydzień"
Zamów 3x w tygodniu → odblokuj darmową dostawę na cały następny tydzień. Widoczny progress bar na home.

**Co działało:** Engagement x3 vs V1. Użytkownicy rozumieli „zasady gry" w 5 sekund. Pasek postępu generował efekt FOMO — „jeszcze jedno zamówienie i mam".
**Co nie działało:** Tygodniowy cykl to za mało elastyczny — ludzie zamawiają nieregularnie. Kara za „przerwanie streaka" frustruje.

### V3 (finalna): Hybrid — Streak + Tiers + Instant Rewards
Połączenie trzech mechanik:

1. **Weekly streak** (ale elastyczny — 2 lub 3 zamówienia, zależnie od historii)
2. **Tier system** (Lisek → Lis → Złoty Lis) — wyższy tier = lepsze benefity stałe
3. **Instant perks** — drobne nagrody po każdym zamówieniu (gratis do koszyka, priorytetowa dostawa), żeby uczucie nagrody było natychmiastowe

---

## 4. Rozwiązanie

### Ekran 1: Home z progress barem
Na górze głównego ekranu — widoczny pasek streaka z komunikatem „Jeszcze 1 zamówienie do darmowej dostawy". Nie ukryty w zakładce — na widoku, w kontekście decyzji zakupowej.

### Ekran 2: Profil lojalnościowy
Tier użytkownika + aktualne benefity + historia nagród. Prosty, czytelny — zero zbędnych animacji. Widać co mam, co mogę odblokować, ile brakuje.

### Ekran 3: Moment nagrody (post-checkout)
Po złożeniu zamówienia — animacja z nagrodą: „Darmowy sok pomarańczowy dodany do zamówienia!" albo „Odblokowano darmową dostawę na 7 dni!". Kluczowe: nagroda jest natychmiastowa i namacalna — nie abstrakcyjne punkty.

### Ekran 4: Streak recovery
Jeśli użytkownik przerywa streak — zamiast kary, dostaje „drugie życie": „Złóż zamówienie do piątku i streak wraca". Eliminuje frustrację i daje poczucie fair play.

---

## 5. Wyniki

Dane po 8 tygodniach od launchu (soft launch, 15% bazy użytkowników):

| Metryka | Przed | Po | Zmiana |
|---------|-------|----|--------|
| Częstotliwość zamówień/mies. | 1.4 | 2.3 | +64% |
| Churn 60d | 41% | 29% | -12pp |
| AOV (avg order value) | 48 zł | 52 zł | +8% |
| NPS programu | — | 47 | — |

**Uwaga:** Wyniki z soft launch na 15% bazy. Full rollout w toku.

---

## 6. Testimonial

> „Program lojalnościowy był naszym brakującym puzzlem. Miłosz zaprojektował system, który nie czuje się jak kolejna karta lojalnościowa — użytkownicy mówią, że to 'gra, w którą chcą grać'."
> — Marta Wiśniewska, Head of Product, Lisek

---

## 7. Key Learnings

1. **Nagradzaj częstotliwość, nie kwotę.** W q-commerce wartość klienta to regularność — nie jednorazowe duże zakupy. Streak działa lepiej niż punkty, bo jest zrozumiały i bliski.

2. **Natychmiastowa gratyfikacja > odroczona nagroda.** „Darmowy sok teraz" motywuje bardziej niż „500 punktów zamień na 10 zł rabatu za miesiąc". Ludzie żyją w teraźniejszości.

3. **Kara za przerwanie to najgorszy pattern.** Duolingo streak działa na naukę, ale w zakupach — ludzie mają życie. „Drugie życie" zamiast kary zmieniło sentyment z frustracji na wdzięczność.

4. **Widoczność > głębokość.** Progress bar na home (nie w ukrytej zakładce) zwiększył engagement o 3x. Jeśli user musi szukać programu, to nie istnieje.
