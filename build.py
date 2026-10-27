import html, json, pathlib

ROOT = pathlib.Path(__file__).parent
items = json.loads((ROOT / "assets" / "fab" / "items.json").read_text(encoding="utf-8"))


def price(p):
    return "Free" if not p else f"${p:.2f}"


cards = "\n".join(
    f'''      <a class="card" href="https://www.fab.com/listings/{i["uid"]}">
        <img src="{i["img"]}" alt="" width="{i["w"]}" height="{i["h"]}" loading="lazy">
        <span class="row"><span class="name">{html.escape(i["title"])}</span><span class="price">{price(i["price"])}</span></span>
      </a>'''
    for i in items
)

page = (ROOT / "template.html").read_text(encoding="utf-8")
page = page.replace("{{CARDS}}", cards).replace("{{COUNT}}", str(len(items)))
(ROOT / "index.html").write_text(page, encoding="utf-8")
print("index.html", len(page), "bytes,", len(items), "cards")
