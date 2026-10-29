"""Build prototype/replay/replay-2020.js: real daily prices for the 2020 replay.

Sources (download them yourself, then pass the paths):
  1. skfolio (pip package, BSD licence), files skfolio/datasets/data/sp500_index.csv.gz,
     sp500_dataset.csv.gz and factors_dataset.csv.gz. Daily closes from Yahoo Finance:
     the S&P 500 index level, and stock/ETF prices adjusted for splits and dividends.
     Get them with:  pip download --no-deps skfolio  and unzip the wheel.
  2. Coin Metrics community data, csv/btc.csv, column PriceUSD (daily reference rate).
     https://github.com/coinmetrics/data  (licence CC BY-NC 4.0: fine for this prototype,
     not for a paid product; the real app needs a licensed provider anyway).

Usage:
  python3 tools/build-replay-2020.py <dir with the three .csv.gz files> <btc.csv>

The script checks the result against known 2020 history and stops if anything is off.
"""
import csv, gzip, json, sys

if len(sys.argv) != 3:
    sys.exit(__doc__)
src, btc_path = sys.argv[1], sys.argv[2]

def rows(name):
    with gzip.open(f"{src}/{name}", "rt") as f:
        return {r["Date"]: r for r in csv.DictReader(f)}

index, stocks, funds = rows("sp500_index.csv.gz"), rows("sp500_dataset.csv.gz"), rows("factors_dataset.csv.gz")
with open(btc_path) as f:
    btc = {r["time"]: r["PriceUSD"] for r in csv.DictReader(f)}

dates = sorted(d for d in index if d.startswith("2020"))

# sym, name, type, where the price comes from, one-line description shown in the app
ASSETS = [
    ("SP500", "S&P 500 tracker", "etf", lambda d: float(index[d]["SP500"]) / 10,
     "Follows the 500 biggest US companies. Price = the index level ÷ 10, about one share of an S&P 500 fund."),
    ("AAPL", "Apple", "stock", lambda d: float(stocks[d]["AAPL"]), "iPhones, Macs and services."),
    ("PFE", "Pfizer", "stock", lambda d: float(stocks[d]["PFE"]), "Medicines and vaccines."),
    ("XOM", "ExxonMobil", "stock", lambda d: float(stocks[d]["XOM"]), "Oil and gas."),
    ("BAC", "Bank of America", "stock", lambda d: float(stocks[d]["BAC"]), "One of the biggest US banks."),
    ("WMT", "Walmart", "stock", lambda d: float(stocks[d]["WMT"]), "Supermarkets and everyday shopping."),
    ("USMV", "Low-volatility fund", "etf", lambda d: float(funds[d]["USMV"]),
     "A fund of US stocks picked for smaller price swings (iShares MSCI USA Min Vol)."),
    ("BTC", "Bitcoin", "crypto", lambda d: float(btc[d]), "The biggest cryptocurrency. Trades every day; prices here are on stock-market days."),
]

assets = []
for sym, name, typ, get, blurb in ASSETS:
    px = [round(get(d), 2) for d in dates]
    assets.append({"sym": sym, "name": name, "type": typ, "blurb": blurb, "px": px})

# News on the trading day it happened (or the first trading day after). Written in our own words;
# every market move quoted here is recomputed from the data below.
NEWS = [
    ("2020-01-02", "A new year, and US stocks start it at a record high.", "The S&P 500 closes above its previous best from December."),
    ("2020-01-30", "The World Health Organization declares the new coronavirus a global health emergency.", "Most cases so far are in China."),
    ("2020-02-19", "The S&P 500 closes at a new record high.", "Investors expect the virus to stay mostly in China."),
    ("2020-02-24", "Cases jump in Italy and South Korea. The S&P 500 falls 3.4%.", "Fear grows that the virus will spread worldwide."),
    ("2020-02-27", "US stocks are now 12% below last week's record.", "One of the fastest falls of that size on record."),
    ("2020-03-09", "Oil prices crash after Saudi Arabia and Russia fail to agree on cutting supply.", "US stocks fall 7% within minutes and trading is paused for 15 minutes. The S&P 500 ends the day down 7.6%."),
    ("2020-03-11", "The WHO calls the outbreak a pandemic.", "Countries start closing borders, schools and offices."),
    ("2020-03-12", "The S&P 500 falls 9.5%, its worst day since 1987. Bitcoin loses more than a third of its value in a day.", "Investors sell almost everything to raise cash."),
    ("2020-03-16", "The US central bank cut interest rates to almost zero on Sunday. Stocks still fall 12%.", "The biggest one-day fall since 1987."),
    ("2020-03-23", "The US central bank says it will buy as many bonds as it takes to keep markets working.", "Stocks are now about a third below their February record."),
    ("2020-03-24", "Stocks jump 9.4%, the best day since 2008.", "Big rises often happen in the middle of a crash, not after it."),
    ("2020-03-27", "The US passes a $2.2 trillion relief package.", "It includes payments to most households and loans for businesses."),
    ("2020-04-20", "The price of US oil for May delivery falls below zero for the first time.", "With storage full, sellers paid buyers to take oil off their hands."),
    ("2020-08-18", "The S&P 500 closes at a new record high, five months after its March low.", "Big tech companies led the recovery."),
    ("2020-08-31", "Apple splits each share into four. ExxonMobil and Pfizer leave the Dow Jones index.", "Prices here are adjusted for splits, so Apple's chart doesn't jump."),
    ("2020-11-03", "US presidential election day.", "Results take several days to come in."),
    ("2020-11-09", "Pfizer says its vaccine was more than 90% effective in trials.", "Pfizer rises 7.7%, ExxonMobil 12.7% and Bank of America 14.2%. Apple falls 2.0%."),
    ("2020-12-14", "The first vaccinations begin in the US.", "Regulators authorised the Pfizer-BioNTech vaccine on Friday."),
    ("2020-12-16", "Bitcoin passes $20,000 for the first time.", "It started the year at about $7,000."),
    ("2020-12-31", "The last trading day of 2020.", "Check your result below."),
]

# ---- checks against known history: stop if the data disagrees ----
sp = [float(index[d]["SP500"]) for d in dates]
pct = lambda a, b: (b / a - 1) * 100
def day_change(series, d): i = dates.index(d); return pct(series[i - 1], series[i])
def stock(sym): return [float(stocks[d][sym]) for d in dates]
checks = [
    (len(dates) == 253, "253 trading days in 2020"),
    (dates[0] == "2020-01-02" and dates[-1] == "2020-12-31", "first and last days"),
    (sp[0] > max(float(r["SP500"]) for d, r in index.items() if d < "2020"), "record high on 2 January"),
    (dates[sp.index(max(sp[:60]))] == "2020-02-19", "February record on the 19th"),
    (dates[sp.index(min(sp))] == "2020-03-23", "the low was 23 March"),
    (round(day_change(sp, "2020-02-24"), 1) == -3.4, "-3.4% on 24 Feb"),
    (round(pct(sp[dates.index("2020-02-19")], sp[dates.index("2020-02-27")])) == -12, "12% below the record on 27 Feb"),
    (round(day_change(sp, "2020-03-09"), 1) == -7.6, "-7.6% on 9 Mar"),
    (round(day_change(sp, "2020-03-12"), 1) == -9.5, "-9.5% on 12 Mar"),
    (round(day_change(sp, "2020-03-16")) == -12, "-12% on 16 Mar"),
    (round(day_change(sp, "2020-03-24"), 1) == 9.4, "+9.4% on 24 Mar"),
    (dates[next(i for i in range(60, 253) if sp[i] > max(sp[:60]))] == "2020-08-18", "next record on 18 Aug"),
    (float(btc["2020-03-12"]) / float(btc["2020-03-11"]) < 2 / 3, "Bitcoin lost more than a third on 12 Mar"),
    (min(d for d in btc if d.startswith("2020") and float(btc[d]) > 20000) == "2020-12-16", "Bitcoin first above $20,000 on 16 Dec"),
    (round(day_change(stock("PFE"), "2020-11-09"), 1) == 7.7, "Pfizer +7.7% on 9 Nov"),
    (round(day_change(stock("XOM"), "2020-11-09"), 1) == 12.7, "ExxonMobil +12.7% on 9 Nov"),
    (round(day_change(stock("BAC"), "2020-11-09"), 1) == 14.2, "Bank of America +14.2% on 9 Nov"),
    (round(day_change(stock("AAPL"), "2020-11-09"), 1) == -2.0, "Apple -2.0% on 9 Nov"),
    (all(d in dates for d, *_ in NEWS), "every news date is a trading day"),
]
bad = [msg for ok, msg in checks if not ok]
if bad:
    sys.exit("Data check failed: " + "; ".join(bad))

out = {
    "title": "Replay 2020",
    "dates": dates,
    "assets": assets,
    "news": [{"d": d, "t": t, "b": b} for d, t, b in NEWS],
    "sources": "Real 2020 closing prices. Stocks and the low-volatility fund are adjusted for splits and dividends; "
               "the S&P 500 tracker is the index level ÷ 10, without dividends. Bitcoin: Coin Metrics daily reference rate.",
}
path = "prototype/replay/replay-2020.js"
with open(path, "w") as f:
    f.write("/* ---------- Replay 2020: real daily prices ----------\n"
            "   Generated by tools/build-replay-2020.py (sources and checks are in that file). Don't edit by hand. */\n")
    f.write("const REPLAY_2020 = " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
print(f"Wrote {path}: {len(dates)} days, {len(assets)} assets, {len(NEWS)} news items. All {len(checks)} checks passed.")
