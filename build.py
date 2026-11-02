import html, json, pathlib

ROOT = pathlib.Path(__file__).parent
items = json.loads((ROOT / "assets" / "fab" / "items.json").read_text(encoding="utf-8"))

cards = "\n".join(
    f'''      <a class="card" href="https://www.fab.com/listings/{i["uid"]}">
        <img src="{i["img"]}" alt="" width="{i["w"]}" height="{i["h"]}" loading="lazy">
        <span class="name">{html.escape(i["title"])}</span>
      </a>'''
    for i in items
)

APPS = {"tts": "icon.png", "video": "assets/dylo-video.png"}
SLOTS = [(("tts", 2), ("video", 5)), (("video", 1), ("tts", 4)), (("tts", 3), ("video", 6))]


def row(n):
    tiles = [f'<img class="tile" src="{i["img"]}" alt="">' for i in items[n::3]]
    for app, at in SLOTS[n]:
        tiles.insert(at, f'<img class="tile icon" src="{APPS[app]}" alt="">')
    return '          <div class="track">' + "".join(tiles * 2) + "</div>"


reel = "\n".join(row(n) for n in range(3))

page = (ROOT / "template.html").read_text(encoding="utf-8")
page = page.replace("{{CARDS}}", cards).replace("{{REEL}}", reel)
(ROOT / "index.html").write_text(page, encoding="utf-8")
print("index.html", len(page), "bytes,", len(items), "cards")
